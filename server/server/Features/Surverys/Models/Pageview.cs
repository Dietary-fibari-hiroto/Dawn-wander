using server.Features.Projects.Models;


namespace server.Features.Surverys.Models
{
    public class Pageview { 
        public int Id { get; set; }
        public int Page_id { get; set; }
        public Page? Page { get; set; }
        public int User_trial_id { get; set; }
        public User_trial? User_Trial { get; set; }
        public float Staying_time { get; set; }
        public int? After_page { get; set; }
    }

}
