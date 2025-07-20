using System.ComponentModel.DataAnnotations.Schema;
using server.Features.Projects.Models;

namespace server.Features.Surverys.Models
{
    public class Taskresult { 
        public int Id { get; set; }

        [Column("user_trial_id")]
        public int User_trial_id { get; set; }
        [ForeignKey("User_trial_id")]
        public User_trial? User_trial { get; set; }

        public float Time { get; set; } = 0;
        public Boolean Is_success { get; set; } = true;
        public int Total_click {  get; set; } = 0;
    }

}


