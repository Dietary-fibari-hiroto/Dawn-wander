using Microsoft.AspNetCore.Mvc;
using server.Features.Users.Models;
using server.Features.Users.Services;

namespace server.Features.Users
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController : ControllerBase {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _service.GetUsersAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _service.GetUserAsync(id);
            return user == null ? NotFound() : Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] User user)
        {
            var newUser = await _service.CreateUserAsync(user);
            return CreatedAtAction(nameof(GetById), new { id = newUser.Id }, newUser);
        }
    
    }

}
