using AuthorWebsiteAPI.Data;
using AuthorWebsiteAPI.DTOs;
using AuthorWebsiteAPI.Models;
using AuthorWebsiteAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace AuthorWebsiteAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;
        private readonly EmailService _email;

        public OrdersController(AppDbContext context, IConfiguration config, EmailService email)
        {
            _context = context;
            _config = config;
            _email = email;
        }

        // ================= CREATE RAZORPAY ORDER =================
        [HttpPost("create-razorpay-order")]
        public IActionResult CreateRazorpayOrder([FromBody] RazorpayOrderDto dto)
        {
            if (dto.Items == null || !dto.Items.Any())
                return BadRequest("Cart is empty");

            decimal total = 0;
            decimal shipping = 0;

            foreach (var item in dto.Items)
            {
                if (dto.Type == "book")
                {
                    var book = _context.Books.Find(item.Id);
                    if (book == null) return BadRequest("Invalid book");

                    total += book.Price * item.Quantity;
                }
                else if (dto.Type == "video")
                {
                    var video = _context.Videos.Find(item.Id);
                    if (video == null) return BadRequest("Invalid video");

                    total += video.Price * item.Quantity;
                }
                else
                {
                    return BadRequest("Invalid type");
                }
            }

            if (dto.Type == "book")
            {
                shipping = total >= 499 ? 0 : 49;
            }
            else
            {
                shipping = 0;
            }

            decimal finalTotal = total + shipping;

            var client = new Razorpay.Api.RazorpayClient(
                _config["Razorpay:Key"],
                _config["Razorpay:Secret"]
            );

            var options = new Dictionary<string, object>
            {
                { "amount", (int)(finalTotal * 100) },
                { "currency", "INR" },
                { "receipt", Guid.NewGuid().ToString() }
            };

            var order = client.Order.Create(options);

            return Ok(new
            {
                orderId = order["id"].ToString(),
                amount = (int)(finalTotal * 100),
                key = _config["Razorpay:Key"]
            });
        }

        // ================= VERIFY PAYMENT + CREATE ORDER =================
        [HttpPost("verify-payment")]
        public async Task<IActionResult> VerifyPayment([FromBody] RazorpayVerifyDto dto)
        {
            var secret = _config["Razorpay:Secret"];

            string payload = dto.razorpay_order_id + "|" + dto.razorpay_payment_id;

            using var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(secret));
            var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(payload));
            var generatedSignature = BitConverter.ToString(hash).Replace("-", "").ToLower();

            if (generatedSignature != dto.razorpay_signature)
                return BadRequest("Invalid signature");

            var dtoOrder = dto.OrderData;

            decimal total = 0;
            decimal shipping = 0; // ✅ default
            var orderItems = new List<OrderItem>();

            foreach (var item in dtoOrder.Items)
            {
                if (dtoOrder.Type == "book")
                {
                    var book = _context.Books.Find(item.Id);
                    if (book == null) return BadRequest("Invalid book");

                    total += book.Price * item.Quantity;

                    orderItems.Add(new OrderItem
                    {
                        BookId = item.Id,
                        VideoId = null,
                        Quantity = item.Quantity
                    });
                }
                else if (dtoOrder.Type == "video")
                {
                    var video = _context.Videos.Find(item.Id);
                    if (video == null) return BadRequest("Invalid video");

                    total += video.Price * item.Quantity;

                    orderItems.Add(new OrderItem
                    {
                        BookId = null,
                        VideoId = item.Id,
                        Quantity = item.Quantity
                    });
                }
            }

            // ✅ SHIPPING LOGIC FIXED
            if (dtoOrder.Type == "book")
            {
                shipping = total >= 499 ? 0 : 49;
            }
            else
            {
                shipping = 0;
            }

            decimal finalTotal = total + shipping;

            var order = new Order
            {
                CustomerName = dtoOrder.CustomerName,
                Email = dtoOrder.Email,
                Phone = dtoOrder.Phone,
                Address = dtoOrder.Address,
                City = dtoOrder.City,
                State = dtoOrder.State,
                Pincode = dtoOrder.Pincode,
                PaymentMethod = "Razorpay",
                TotalAmount = finalTotal,
                Items = orderItems
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            // ================= EMAIL =================
            var itemsHtml = "";

            foreach (var item in orderItems)
            {
                if (item.BookId != null)
                {
                    var book = _context.Books.Find(item.BookId);

                    itemsHtml += $@"
                <tr>
                    <td>{book.Title}</td>
                    <td>{item.Quantity}</td>
                    <td>₹{book.Price}</td>
                </tr>";
                }
                else if (item.VideoId != null)
                {
                    var video = _context.Videos.Find(item.VideoId);

                    itemsHtml += $@"
                <tr>
                    <td>{video.Title}</td>
                    <td>{item.Quantity}</td>
                    <td>₹{video.Price}</td>
                </tr>";
                }
            }

            var body = $@"
        <h2>Order Confirmed ✅</h2>
        <p>Hi {order.CustomerName},</p>
        <p>Your order has been placed successfully.</p>

        <table border='1' cellpadding='8' cellspacing='0'>
            <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
            </tr>
            {itemsHtml}
        </table> <br/>

        Shipping:</strong> ₹{shipping}</p> <h3> Shipping + Price = Total: ₹{order.TotalAmount}</h3>
        <p>© 2026 Raghvan Koli. All rights reserved.</p>
    ";

            await _email.SendAsync(order.Email, "Order Confirmation", body);

            return Ok(new
            {
                order.Id,
                order.TotalAmount,
                order.CustomerName,
                order.Email,
                Shipping = shipping, // ✅ useful for frontend

                Items = order.Items.Select(i => new
                {
                    i.Quantity,
                    Book = i.Book != null ? i.Book.Title : null,
                    Video = i.Video != null ? i.Video.Title : null
                })
            });
        }

        // ================= GET ALL =================
        [HttpGet]
        public IActionResult GetAll()
        {
            var orders = _context.Orders
            .Include(o => o.Items)
                .ThenInclude(i => i.Book)
            .Include(o => o.Items)
                .ThenInclude(i => i.Video)
            .ToList();

            return Ok(orders);
        }
    }
}