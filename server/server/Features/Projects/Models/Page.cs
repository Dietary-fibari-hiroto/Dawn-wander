using server.Features.Projects.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Features.Projects.Models
{
    public class Page {
        public int Id { get; set; }
        [Column("project_id")]
        public int Project_id { get; set; }
        [ForeignKey("Project_id")]
        public Project? Project { get; set; }

        public string Page_name { get; set; } = string.Empty;
        public string Explain_text { get; set; } = "";
    }

}
