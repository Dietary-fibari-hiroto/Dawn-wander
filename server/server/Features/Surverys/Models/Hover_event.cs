using server.Features.Projects.Models;

namespace server.Features.Surverys.Models
{
    public class Hover_event { 
        public int Id { get; set; }
        public int Pageview_id { get; set; }
        public Pageview? Pageview { get; set; }
        public int Element_id { get; set; }
        public Element? Element { get; set; }
        public float? duration_sec { get; set; }
    }


}
