using server.Features.Projects.Models;
using server.Features.Surverys.Models;
using server.Features.Surverys.Repositories;
using server.Features.Surverys.Services;

namespace server.Features.Surverys.Services
{
    public class PageviewService : IPageviewService
    {
        private readonly IPageviewRepository _repo;

        public PageviewService(IPageviewRepository repo)
        {
            _repo = repo;
        }

        public Task<IEnumerable<Pageview>> GetAllAsync() => _repo.GetAllAsync();
        public Task<Pageview?> GetByIdAsync(int id) => _repo.GetByIdAsync(id);
        public Task<Pageview> CreateAsync(Pageview pageview) => _repo.AddAsync(pageview);
        public async Task<Pageview?> UpdateAsync(int id, UpdateStayingtime updateStayingtime)
        {
            var pageview = await _repo.GetByIdAsync(id);
            if (pageview == null)
            {
                return null;
            }

            pageview.Staing_time = updateStayingtime.Staing_time;
            await _repo.UpdateAsync(pageview);
            return pageview;
        }
    }

    public class ClickeventService : IClickeventService
    {
        private readonly IClickEventRepository _repo;

        public ClickeventService(IClickEventRepository repo)
        {
            _repo = repo;
        }

        public Task<IEnumerable<Clickevent>> GetAllAsync() => _repo.GetAllAsync();
        public Task<Clickevent> CreateAsync(Clickevent clickeven) => _repo.AddAsync(clickeven);
    }
    public class Hover_eventService : IHover_eventService
    {
        private readonly IHover_eventRepository _repo;
        public Hover_eventService(IHover_eventRepository repo)
        {
            _repo = repo;
        }

        public Task<IEnumerable<Hover_event>> GetAllAsync()=> _repo.GetAllAsync();
        public Task<Hover_event> CreateAsync(Hover_event hover_event)=>_repo.AddAsync(hover_event);
    }

    public class ScrollService : IScrollService
    {
        private readonly IScrollRepository _repo;
        public ScrollService(IScrollRepository repo)
        {
            _repo = repo;
        }
        public Task<IEnumerable<Scroll>> GetAllAsync() => _repo.GetAllAsync();
        public Task<Scroll> CreateAsync(Scroll scroll)=> _repo.AddAsync(scroll);
    }

    public class TaskresultService : ITaskresultService
    {
        private readonly ITaskresultRepository _repo;
        public TaskresultService(ITaskresultRepository repo)
        {
            _repo = repo;
        }   
        public Task<IEnumerable<Taskresult>> GetAllAsync()=> _repo.GetAllAsync();
        public Task<Taskresult> CreateAsync(Taskresult taskresult)=> _repo.AddAsync(taskresult);
    }

    public class User_trialService : IUser_trialService
    {
        private readonly IUser_trialRepository _repo;
        public User_trialService(IUser_trialRepository repo)
        {
            _repo = repo;
        }
        public Task<IEnumerable<User_trial>> GetAllAsync() => _repo.GetAllAsync();
        public Task<User_trial> CreateAsync(User_trial user_trial)=> _repo.AddAsync(user_trial);
        public Task<User_trial?> UpdateAsync(int id)=> _repo.UpdateAsync(id);
    }


}