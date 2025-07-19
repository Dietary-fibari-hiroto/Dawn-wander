using server.Features.Surverys.Models;

namespace server.Features.Projects.Models
{
    public class Clickevent { 
        public int Id { get; set; }
        public int Pageview_id { get; set; }
        public Pageview? Pageview { get; set; }
        public int Element_id { get; set; }
        public Element? Element { get; set; }
        public DateTime? clicked_at { get; set; }
    }

}
