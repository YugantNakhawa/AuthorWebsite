namespace AuthorWebsiteAPI.Models
{
    public class Video
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string YoutubeUrl { get; set; }
        public decimal Price { get; set; }
        public int Duration { get; set; }
        public string Category { get; set; }
        public ICollection<VideoPurchase> VideoPurchases { get; set; }
    }
}