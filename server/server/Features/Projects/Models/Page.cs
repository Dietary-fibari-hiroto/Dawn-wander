using server.Features.Projects.Models;

namespace server.Features.Projects.Models
{
    public class Page {
        public int Id { get; set; }
        public int Project_id { get; set; }
        public Project? Project { get; set; }
        public string page_name { get; set; } = string.Empty;
        public string explain_text { get; set; } = "";
    }

}
