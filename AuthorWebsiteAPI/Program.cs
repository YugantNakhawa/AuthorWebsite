using AuthorWebsiteAPI.Data;
using AuthorWebsiteAPI.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// =========================
// DB CONTEXT
// =========================
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// =========================
// JWT AUTH (READ FROM COOKIE)
// =========================
var jwtKey = builder.Configuration["Jwt:Key"];

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,

        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],

        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(jwtKey)
        )
    };

    // 🔥 CRITICAL: Read JWT from HttpOnly Cookie
    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            var token = context.Request.Cookies["jwt"];
            if (!string.IsNullOrEmpty(token))
            {
                context.Token = token;
            }
            return Task.CompletedTask;
        }
    };
});

// =========================
// CORS (REQUIRED FOR COOKIES)
// =========================
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // ⚠️ change in production
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); // 🔥 REQUIRED for cookies
    });
});

builder.Services.AddScoped<EmailService>();

// =========================
// SERVICES
// =========================
builder.Services.AddControllers();
builder.Services.AddAuthorization();
builder.Services.AddOpenApi();

var app = builder.Build();

// =========================
// PIPELINE
// =========================
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// ⚠️ Order matters
app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();