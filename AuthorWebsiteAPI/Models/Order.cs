namespace AuthorWebsiteAPI.Models
{
    public class Order
    {
        public int Id { get; set; }

        public decimal TotalAmount { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public string CustomerName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Pincode { get; set; }

        public string PaymentMethod { get; set; }

        public List<OrderItem> Items { get; set; }
    }
}
