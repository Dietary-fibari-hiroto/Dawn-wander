using System.ComponentModel.DataAnnotations.Schema;
using server.Features.Users.Models;

namespace server.Features.Projects.Models {
    public class User_trial
    {
        public int Id { get; set; }

        [Column("user_id")]
        public int User_id { get; set; }

        [ForeignKey("User_id")]
        public User? User { get; set; }

        [Column("project_id")]
        public int Project_id { get; set; }

        [ForeignKey("Project_id")]
        public Project? Project { get; set; }

        [Column("operation_id")]
        public int Operation_id { get; set; }

        [ForeignKey("Operation_id")]
        public Operation? Operation {get;set;}

        public DateTime? Started_at { get; set; } = DateTime.Now;
        public DateTime? Finished_at { get; set; }
    }
}
