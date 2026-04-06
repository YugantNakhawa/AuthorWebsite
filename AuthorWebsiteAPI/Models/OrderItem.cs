using System.Text.Json.Serialization;

namespace AuthorWebsiteAPI.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int? VideoId { get; set; }
        public Video Video { get; set; }
        public int? BookId { get; set; }
        public Book Book { get; set; }
        public int Quantity { get; set; }
        public int OrderId { get; set; }
        [JsonIgnore]
        public Order Order { get; set; }
    }
}
