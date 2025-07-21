using server.Features.Projects.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Features.Surverys.Models
{
    public class Pageview { 
        public int Id { get; set; }
        [Column("page_id")]
        public int Page_id { get; set; }
        [ForeignKey("Page_id")]
        public Page? Page { get; set; }

        [Column("user_trial_id")]
        public int User_trial_id { get; set; }
        [ForeignKey("User_trial_id")]
        public User_trial? User_Trial { get; set; }

        public float? Staing_time { get; set; } = 0;
        public int? After_page { get; set; }
    }

    public class UpdateStayingtime {
        public float? Staing_time { get; set; } = 0;
    }


}
