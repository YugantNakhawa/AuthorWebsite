namespace AuthorWebsiteAPI.Models
{
    public class Speech
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Institution { get; set; }
        public string Duration { get; set; }
        public string Date { get; set; }
        public string Views { get; set; }
        public string YoutubeUrl { get; set; }   // full URL
        public string Description { get; set; }
        public string Tags { get; set; } // comma separated
    }
}
