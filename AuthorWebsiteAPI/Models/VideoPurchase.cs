using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AuthorWebsiteAPI.Models
{
    public class VideoPurchase
    {
        public int Id { get; set; }

        // 🔗 FOREIGN KEY → USER
        public int UserId { get; set; }
        public User User { get; set; }

        // 🔗 FOREIGN KEY → VIDEO
        public int VideoId { get; set; }
        public Video Video { get; set; }

        public DateTime PurchasedAt { get; set; }
        public DateTime ExpiresAt { get; set; }
    }
}