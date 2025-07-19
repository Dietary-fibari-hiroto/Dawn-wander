using server.Features.Projects.Models;

namespace server.Features.Surverys.Models
{
    public class Taskresult { 
        public int Id { get; set; }
        public int User_trial_id { get; set; }
        public User_trial? User_trial { get; set; }
        public float Time { get; set; } = 0;
        public Boolean Is_sccess { get; set; } = true;
        public int Total_click {  get; set; } = 0;
    }

}


