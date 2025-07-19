using server.Features.Projects.Models;

namespace server.Features.Projects.Models
{
    public class Element { 
        public int Id { get; set; }
        public int Page_id { get; set; }
        public Page? Page { get; set; }
        public string Element_name { get; set; } = string.Empty;
        public string Explain_text { get; set; } = "";
    }


}
