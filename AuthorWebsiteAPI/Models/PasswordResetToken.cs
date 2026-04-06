namespace AuthorWebsiteAPI.Models
{
    public class PasswordResetToken
    {
        public int Id { get; set; }

        // 🔥 Foreign Key
        public int UserId { get; set; }

        // 🔥 Navigation Property
        public User User { get; set; }

        public string Token { get; set; }
        public DateTime ExpiresAt { get; set; }
        public bool IsUsed { get; set; }
    }
}