using AuthorWebsiteAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AuthorWebsiteAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // 🔹 Tables
        public DbSet<Book> Books { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Speech> Speeches { get; set; }
        public DbSet<Video> Videos { get; set; }
        public DbSet<VideoPurchase> VideoPurchases { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<PasswordResetToken> PasswordResetTokens { get; set; }

        // 🔹 Model Configuration
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // ✅ Book
            modelBuilder.Entity<Book>()
                .Property(b => b.Price)
                .HasPrecision(10, 2);

            modelBuilder.Entity<Book>()
                .Property(b => b.OriginalPrice)
                .HasPrecision(10, 2);

            // ✅ Order
            modelBuilder.Entity<Order>()
                .Property(o => o.TotalAmount)
                .HasPrecision(12, 2);

            // ✅ Video
            modelBuilder.Entity<Video>()
                .Property(v => v.Price)
                .HasPrecision(10, 2);

            // ================= RELATIONS =================

            modelBuilder.Entity<Order>()
                .HasMany(o => o.Items)
                .WithOne(oi => oi.Order)
                .HasForeignKey(oi => oi.OrderId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<OrderItem>()
                .HasOne(oi => oi.Book)
                .WithMany()
                .HasForeignKey(oi => oi.BookId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<OrderItem>()
                .HasOne(oi => oi.Video)
                .WithMany()
                .HasForeignKey(oi => oi.VideoId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<VideoPurchase>()
                .HasOne(vp => vp.User)
                .WithMany(u => u.VideoPurchases)
                .HasForeignKey(vp => vp.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<VideoPurchase>()
                .HasOne(vp => vp.Video)
                .WithMany(v => v.VideoPurchases)
                .HasForeignKey(vp => vp.VideoId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<PasswordResetToken>()
                .HasOne(p => p.User)
                .WithMany(u => u.PasswordResetTokens)
                .HasForeignKey(p => p.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}