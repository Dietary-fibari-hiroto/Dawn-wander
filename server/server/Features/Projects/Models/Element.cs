using server.Features.Projects.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Features.Projects.Models
{
    public class Element { 
        public int Id { get; set; }
        [Column("page_id")]
        public int Page_id { get; set; }
        [ForeignKey("page_id")]
        public Page? Page { get; set; }
        public string Element_name { get; set; } = string.Empty;
        public string Explain_text { get; set; } = "";
    }


}
