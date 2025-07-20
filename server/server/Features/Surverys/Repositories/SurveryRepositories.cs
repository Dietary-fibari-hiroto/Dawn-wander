using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Features.Projects.Models;
using server.Features.Surverys.Models;


namespace server.Features.Surverys.Repositories
{
    public class PageviewRepository : IPageviewRepository
    {
        private readonly AppDbContext _context;

        public PageviewRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Pageview>> GetAllAsync() => await _context.Pageviews.ToListAsync();
        public async Task<Pageview?> GetByIdAsync(int id) => await _context.Pageviews.FindAsync(id);
        public async Task<Pageview> AddAsync(Pageview pageview)
        {
            _context.Pageviews.Add(pageview);
            await _context.SaveChangesAsync();
            return pageview;
        }
    }

    public class ClickeventRepository : IClickEventRepository
    {
        private readonly AppDbContext _context;

        public ClickeventRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Clickevent>> GetAllAsync() => await _context.Clickevents.ToListAsync();
        public async Task<Clickevent> AddAsync(Clickevent clickevent)
        {
            _context.Clickevents.Add(clickevent);
            await _context.SaveChangesAsync();
            return clickevent;
        }
    }

    public class Hover_eventRepository : IHover_eventRepository
    {
        public readonly AppDbContext _context;

        public Hover_eventRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Hover_event>> GetAllAsync() => await _context.Hover_Events.ToListAsync();
        public async Task<Hover_event> AddAsync(Hover_event hover_event)
        {
            _context.Hover_Events.Add(hover_event);
            await _context.SaveChangesAsync();
            return hover_event;
        }
    }

    public class ScrollRepository : IScrollRepository
    {
        public readonly AppDbContext _context;
        public ScrollRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Scroll>> GetAllAsync() => await _context.Scrolls.ToListAsync();
        public async Task<Scroll> AddAsync(Scroll scroll)
        {
            _context.Scrolls.Add(scroll);
            await _context.SaveChangesAsync();
            return scroll;
        }

    }

    public class TaskresultRepository : ITaskresultRepository
    {
        public readonly AppDbContext _context;
        public TaskresultRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Taskresult>> GetAllAsync() => await _context.Taskresults.ToListAsync();
        public async Task<Taskresult> AddAsync(Taskresult taskresult)
        {
            _context.Taskresults.Add(taskresult);
            await _context.SaveChangesAsync();
            return taskresult;
        }
    }
    
    public class User_trialRepository : IUser_trialRepository
    {
        public readonly AppDbContext _context;
        public User_trialRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<User_trial>> GetAllAsync() => await _context.User_Trials.ToListAsync();
        public async Task<User_trial> AddAsync(User_trial user_trial)
        {
            _context.User_Trials.Add(user_trial);
            await _context.SaveChangesAsync();
            return user_trial;
        }

    }


}

