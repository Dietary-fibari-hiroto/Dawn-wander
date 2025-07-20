using Microsoft.EntityFrameworkCore;
using server.Features.Users.Models;
using server.Features.Surverys.Models;
using server.Features.Projects.Models;

namespace server.Data
{
    public class AppDbContext : DbContext {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Pageview> Pageviews => Set<Pageview>();
        public DbSet<Clickevent> Clickevents => Set<Clickevent>();
        public DbSet<Hover_event> Hover_Events => Set<Hover_event>();
        public DbSet<Taskresult> Taskresults => Set<Taskresult>();
        public DbSet<Scroll> Scrolls => Set<Scroll>();
        public DbSet<User_trial>User_Trials => Set<User_trial>();   
    }

}