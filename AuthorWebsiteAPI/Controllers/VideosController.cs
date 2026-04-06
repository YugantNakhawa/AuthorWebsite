using Microsoft.AspNetCore.Mvc;
using AuthorWebsiteAPI.Data;
using AuthorWebsiteAPI.Models;
using AuthorWebsiteAPI.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace AuthorWebsiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VideosController(AppDbContext context)
        {
            _context = context;
        }

        // ============================================================
        // GET ALL VIDEOS (PUBLIC)
        // ============================================================
        [HttpGet]
        public IActionResult GetVideos()
        {
            var videos = _context.Videos
                .Select(v => new {
                    v.Id,
                    v.Title,
                    v.Description,
                    v.Price,
                    v.Duration,
                    v.Category
                    // ❌ YoutubeUrl hidden intentionally
                })
                .ToList();

            return Ok(videos);
        }

        // ============================================================
        // GET VIDEO STREAM (PROTECTED)
        // ============================================================
        [Authorize]
        [HttpGet("stream")]
        public async Task<IActionResult> GetVideoStream(int videoId)
        {
            var userId = int.Parse(User.FindFirst("id")?.Value);

            var purchase = await _context.VideoPurchases
                .Where(p => p.UserId == userId && p.VideoId == videoId)
                .OrderByDescending(p => p.PurchasedAt)
                .FirstOrDefaultAsync();

            if (purchase == null || purchase.ExpiresAt <= DateTime.UtcNow)
                return Unauthorized(new { message = "Access denied or expired" });

            var video = await _context.Videos.FindAsync(videoId);

            if (video == null)
                return NotFound();

            return Ok(new
            {
                youtubeUrl = video.YoutubeUrl
            });
        }

        // ============================================================
        // PURCHASE VIDEO (PROTECTED)
        // ============================================================
        [Authorize]
        [HttpPost("purchase")]
        public async Task<IActionResult> PurchaseVideo(PurchaseDto dto)
        {
            var userId = int.Parse(User.FindFirst("id")?.Value);

            var video = await _context.Videos.FindAsync(dto.VideoId);
            if (video == null)
                return NotFound("Video not found");

            int durationMinutes = video.Duration > 0 ? video.Duration : 10;

            var nowUtc = DateTime.UtcNow;
            var expiryUtc = nowUtc.AddMinutes(durationMinutes + 10);

            var purchase = new VideoPurchase
            {
                UserId = userId, // ✅ secure
                VideoId = dto.VideoId,
                PurchasedAt = nowUtc,
                ExpiresAt = expiryUtc
            };

            _context.VideoPurchases.Add(purchase);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Video purchased successfully",
                expiresAt = expiryUtc
            });
        }

        // ============================================================
        // CHECK ACCESS (PROTECTED)
        // ============================================================
        [Authorize]
        [HttpGet("access")]
        public async Task<IActionResult> CheckAccess(int videoId)
        {
            var userId = int.Parse(User.FindFirst("id")?.Value);
            var nowUtc = DateTime.UtcNow;

            var purchase = await _context.VideoPurchases
                .Where(p => p.UserId == userId && p.VideoId == videoId)
                .OrderByDescending(p => p.PurchasedAt)
                .FirstOrDefaultAsync();

            if (purchase == null)
            {
                return Ok(new
                {
                    access = false,
                    expiresAt = (DateTime?)null
                });
            }

            return Ok(new
            {
                access = purchase.ExpiresAt > nowUtc,
                expiresAt = purchase.ExpiresAt
            });
        }
    }
}