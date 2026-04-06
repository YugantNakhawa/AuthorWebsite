using AuthorWebsiteAPI.Data;
using AuthorWebsiteAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace AuthorWebsiteAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BooksController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var books = _context.Books.ToList();
            return Ok(books);
        }

        [HttpPost]
        public IActionResult Add(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
            return Ok(book);
        }
    }
}
