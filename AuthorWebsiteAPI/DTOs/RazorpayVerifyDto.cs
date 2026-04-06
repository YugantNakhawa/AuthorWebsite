namespace AuthorWebsiteAPI.DTOs
{
    public class RazorpayVerifyDto
    {
        public string razorpay_order_id { get; set; }
        public string razorpay_payment_id { get; set; }
        public string razorpay_signature { get; set; }

        // 🔹 Your actual order data (VERY IMPORTANT)
        public CreateOrderDto OrderData { get; set; }
    }
}
