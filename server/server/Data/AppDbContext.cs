using Microsoft.EntityFrameworkCore;
using server.Features.Users.Models;

namespace server.Data
{
    public class AppDbContext : DbContext {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
    }

}