using AuthorWebsiteAPI.Data;
using AuthorWebsiteAPI.DTOs;
using AuthorWebsiteAPI.Models;
using AuthorWebsiteAPI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AuthorWebsiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _config;
        private readonly EmailService _email;

        public AuthController(AppDbContext context, IConfiguration config, EmailService email)
        {
            _context = context;
            _config = config;
            _email = email;
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim("id", user.Id.ToString()),
                new Claim("name", user.Name)
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config["Jwt:Key"])
            );

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddDays(7),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        // ================= REGISTER =================
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDTO req)
        {
            if (_context.Users.Any(u => u.Email == req.Email))
                return BadRequest("User already exists");

            var hasher = new PasswordHasher<string>();

            var user = new User
            {
                Name = req.Name,
                Email = req.Email,
                Password = hasher.HashPassword(null, req.Password),
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully" });
        }

        // ================= LOGIN =================
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequestDTO req)
        {
            var user = _context.Users
                .FirstOrDefault(u => u.Email.ToLower() == req.Email.ToLower());

            if (user == null)
                return Unauthorized("Invalid credentials");

            var hasher = new PasswordHasher<string>();
            var result = hasher.VerifyHashedPassword(null, user.Password, req.Password);

            if (result == PasswordVerificationResult.Failed)
                return Unauthorized("Invalid credentials");

            var token = GenerateJwtToken(user);

            Response.Cookies.Append("jwt", token, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTime.UtcNow.AddDays(7)
            });

            return Ok(new
            {
                user = new
                {
                    id = user.Id,
                    email = user.Email,
                    name = user.Name
                }
            });
        }

        // ================= FORGOT PASSWORD =================
        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotDto dto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == dto.Email);

            if (user == null)
                return Ok(new { message = "If account exists, email sent" });

            var token = Guid.NewGuid().ToString();

            var reset = new PasswordResetToken
            {
                UserId = user.Id,
                Token = token,
                ExpiresAt = DateTime.UtcNow.AddMinutes(15),
                IsUsed = false
            };

            _context.PasswordResetTokens.Add(reset);
            await _context.SaveChangesAsync();

            var resetLink = $"http://localhost:5173/reset-password?token={token}";

            var body = $@"
                <h3>Password Reset</h3>
                <p>Click below to reset your password:</p>
                <a href='{resetLink}'>Reset Password</a>
                <p>This link expires in 15 minutes.</p>
            ";

            await _email.SendAsync(user.Email, "Reset Your Password", body);

            return Ok(new { message = "Reset link sent" });
        }

        // ================= RESET PASSWORD =================
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetDto dto)
        {
            var record = _context.PasswordResetTokens
                .FirstOrDefault(t => t.Token == dto.Token && !t.IsUsed);

            if (record == null || record.ExpiresAt < DateTime.UtcNow)
                return BadRequest("Invalid or expired token");

            var user = _context.Users.Find(record.UserId);

            var hasher = new PasswordHasher<string>();
            user.Password = hasher.HashPassword(null, dto.NewPassword);

            record.IsUsed = true;

            await _context.SaveChangesAsync();

            return Ok(new { message = "Password reset successful" });
        }

        // ================= LOGOUT =================
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt", new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None
            });

            return Ok(new { message = "Logged out" });
        }
    }
}