using Microsoft.AspNetCore.Mvc;
using AuthorWebsiteAPI.Data;
using AuthorWebsiteAPI.Models;

namespace AuthorWebsiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpeechesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SpeechesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Speeches.ToList());
        }
    }
}