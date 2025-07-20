using server.Features.Surverys.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Features.Projects.Models
{
    public class Clickevent { 
        public int Id { get; set; }

        [Column("pageview_id")]
        public int Pageview_id { get; set; }
        [ForeignKey("Pageview_id")]
        public Pageview? Pageview { get; set; }

        [Column("element_id")]
        public int Element_id { get; set; }
        [ForeignKey("Element_id")]
        public Element? Element { get; set; }

        public DateTime? Clicked_at { get; set; }
    }

}
