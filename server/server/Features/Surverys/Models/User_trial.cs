using server.Features.Users.Models;

namespace server.Features.Projects.Models {
    public class User_trial
    {
        public int Id { get; set; }
        public int User_id { get; set; }
        public User? User { get; set; }
        public int Project_id { get; set; }
        public Project? Project { get; set; }
        public int Operation_id { get; set; }
        public Operation? Operation {get;set;}
        public DateTime started_at { get; set; } = DateTime.Now;
        public DateTime? Finished_at { get; set; }
    }
}
