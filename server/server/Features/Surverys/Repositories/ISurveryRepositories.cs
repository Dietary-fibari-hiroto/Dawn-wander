using server.Features.Projects.Models;
using server.Features.Surverys.Models;
namespace server.Features.Surverys.Repositories
{

    public interface IPageviewRepository
    {
        Task<IEnumerable<Pageview>> GetAllAsync();
        Task<Pageview?> GetByIdAsync(int id);
        Task<Pageview> AddAsync(Pageview pageview);
    }

    public interface IClickEventRepository
    {
        Task<IEnumerable<Clickevent>> GetAllAsync();
        Task<Clickevent> AddAsync(Clickevent clickevent);
    }

    public interface IHover_eventRepository
    {
        Task<IEnumerable<Hover_event>> GetAllAsync();
        Task<Hover_event> AddAsync(Hover_event hover_event);
    }

    public interface IScrollRepository
    {
        Task<IEnumerable<Scroll>> GetAllAsync();
        Task<Scroll> AddAsync(Scroll scroll);
    }

    public interface ITaskresultRepository
    {
        Task<IEnumerable<Taskresult>> GetAllAsync();
        Task<Taskresult> AddAsync(Taskresult taskresult);
    }

    public interface IUser_trialRepository
    {
        Task<IEnumerable<User_trial>> GetAllAsync();
        Task<User_trial> AddAsync(User_trial user_trial);
    }


}