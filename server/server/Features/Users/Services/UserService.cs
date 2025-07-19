using server.Features.Users.Models;
using server.Features.Users.Repositories;

namespace server.Features.Users.Services { 
    public class UserService: IUserService
    {
        private readonly IUserRepository _repo;

        public UserService(IUserRepository repo)
        {
            _repo = repo;
        }

        public Task<IEnumerable<User>> GetUsersAsync() => _repo.GetAllAsync();
        public Task<User?> GetUserAsync(int id) => _repo.GetByIdAsync(id);
        public Task<User> CreateUserAsync(User user) => _repo.AddAsync(user);

    }
}
