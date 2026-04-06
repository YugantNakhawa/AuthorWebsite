using Microsoft.AspNetCore.Mvc;

namespace AuthorWebsiteAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        [HttpPost]
        public IActionResult SendMessage([FromBody] object data)
        {
            return Ok(new { message = "Received" });
        }
    }
}
