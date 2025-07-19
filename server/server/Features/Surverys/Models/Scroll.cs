using server.Features.Projects.Models;

namespace server.Features.Surverys.Models
{
    public class Scroll { 
        public int Id { get; set; }
        public int Pageview_id { get; set; }
        public Pageview? Pageview { get; set; }
        public float Max_depth { get; set; }
        public float Amount { get; set; }
        public int Scroll_count { get; set; }
    }

}
