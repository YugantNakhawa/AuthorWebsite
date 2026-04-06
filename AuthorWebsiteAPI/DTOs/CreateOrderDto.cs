namespace AuthorWebsiteAPI.DTOs
{
    public class CreateOrderDto
    {
        public string Type { get; set; }
        public string CustomerName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Pincode { get; set; }

        public string PaymentMethod { get; set; }

        public List<OrderItemDto> Items { get; set; }
    }
}
