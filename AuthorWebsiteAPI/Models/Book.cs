namespace AuthorWebsiteAPI.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string? Subtitle { get; set; }
        public decimal Price { get; set; }
        public decimal? OriginalPrice { get; set; }
        public string? Genre { get; set; }
        public int? Pages { get; set; }
        public int Stock { get; set; }
        public string? Description { get; set; }
        public double? Rating { get; set; }
        public int? Reviews { get; set; }
        public bool Bestseller { get; set; } = false;
        public string? Cover { get; set; }
    }
}