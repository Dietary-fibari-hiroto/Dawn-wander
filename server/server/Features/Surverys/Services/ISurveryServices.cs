using server.Features.Projects.Models;
using server.Features.Surverys.Models;

namespace server.Features.Surverys.Services
{
    public interface IPageviewService
    {
        Task<IEnumerable<Pageview>> GetAllAsync();
        Task<Pageview?> GetByIdAsync(int id);
        Task<Pageview> CreateAsync(Pageview pageview);
    }

    public interface IClickeventService
    {
        Task<IEnumerable<Clickevent>> GetAllAsync();
        Task<Clickevent> CreateAsync(Clickevent clickevent);
    }

    public interface IHover_eventService
    {
        Task<IEnumerable<Hover_event>> GetAllAsync();
        Task<Hover_event> CreateAsync(Hover_event hover_event);
    }

    public interface IScrollService
    {
        Task<IEnumerable<Scroll>> GetAllAsync();
        Task<Scroll> CreateAsync(Scroll scroll);
    }

    public interface ITaskresultService
    {
        Task<IEnumerable<Taskresult>> GetAllAsync();
        Task<Taskresult> CreateAsync(Taskresult taskresult);
    }

    public interface IUser_trialService
    {
        Task<IEnumerable<User_trial>> GetAllAsync();
        Task<User_trial> CreateAsync(User_trial user_trial);
        Task<User_trial?> UpdateAsync(int id);

    }
}