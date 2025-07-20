using server.Features.Projects.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Features.Surverys.Models
{
    public class Hover_event { 
        public int Id { get; set; }
        [Column("pageview_id")]
        public int Pageview_id { get; set; }
        [ForeignKey("Pageview_id")]
        public Pageview? Pageview { get; set; }

        [Column("element_id")]
        public int Element_id { get; set; }
        [ForeignKey("Element_id")]
        public Element? Element { get; set; }

        public float? Duration_sec { get; set; }
    }


}
