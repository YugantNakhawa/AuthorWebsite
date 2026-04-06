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

    // 🔥 Read JWT from cookie
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
// CORS (LOCAL + NETLIFY)
// =========================
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173",                  // local dev
                "https://your-app.netlify.app"           // 🔥 replace with your Netlify URL
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

// =========================
// SERVICES
// =========================
builder.Services.AddScoped<EmailService>();

builder.Services.AddControllers();
builder.Services.AddAuthorization();
builder.Services.AddOpenApi();

var app = builder.Build();

// =========================
// 🔥 PORT FIX FOR RENDER (CRITICAL)
// =========================
var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
app.Urls.Add($"http://0.0.0.0:{port}");

// =========================
// PIPELINE
// =========================
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// ⚠️ Order matters
app.UseCors("AllowFrontend");

// ⚠️ Keep HTTPS locally, but Render already handles HTTPS
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();