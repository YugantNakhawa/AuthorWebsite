namespace AuthorWebsiteAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; } // plain for now (we'll fix later)
        public DateTime CreatedAt { get; set; }
        public ICollection<VideoPurchase> VideoPurchases { get; set; }
        public ICollection<PasswordResetToken> PasswordResetTokens { get; set; }
    }
}