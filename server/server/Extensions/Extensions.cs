using server.Features.Users.Repositories;
using server.Features.Users.Services;

using server.Features.Surverys.Repositories;
using server.Features.Surverys.Services;

namespace server.Extensions
{
    public static class ServiceExtensions {
        public static void RegisterRepositories(this IServiceCollection services)
        {
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IPageviewRepository, PageviewRepository>();
            services.AddScoped<IClickEventRepository, ClickeventRepository>();
            services.AddScoped<IHover_eventRepository,Hover_eventRepository>();
            services.AddScoped<IScrollRepository, ScrollRepository>(); 
            services.AddScoped<ITaskresultRepository, TaskresultRepository>(); 
            services.AddScoped<IUser_trialRepository,User_trialRepository>();
        }




        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IPageviewService, PageviewService>();
            services.AddScoped<IClickeventService, ClickeventService>();
            services.AddScoped<IHover_eventService, Hover_eventService>();
            services.AddScoped<IScrollService, ScrollService>();
            services.AddScoped<ITaskresultService, TaskresultService>();
            services.AddScoped<IUser_trialService, User_trialService>();
        }
    }
    
}
