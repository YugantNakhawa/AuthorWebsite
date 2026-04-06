namespace AuthorWebsiteAPI.DTOs
{
    public class RazorpayOrderDto
    {
        public string Type { get; set; }
        public List<OrderItemDto> Items { get; set; }
    }
}
