using server.Features.Users.Models;

namespace server.Features.Users.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetUsersAsync();
        Task<User?> GetUserAsync(int id);
        Task<User> CreateUserAsync(User user);
    }

}
