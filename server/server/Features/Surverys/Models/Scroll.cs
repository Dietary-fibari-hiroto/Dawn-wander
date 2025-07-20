using server.Features.Projects.Models;
using System.ComponentModel.DataAnnotations.Schema;
namespace server.Features.Surverys.Models
{
    public class Scroll { 
        public int Id { get; set; }

        [Column("pageview_id")]
        public int Pageview_id { get; set; }
        [ForeignKey("Pageview_id")]
        public Pageview? Pageview { get; set; }

        public float Max_depth { get; set; }
        public float Amount { get; set; }
        public int Scroll_count { get; set; }
    }

}
