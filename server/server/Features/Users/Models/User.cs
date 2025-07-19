namespace server.Features.Users.Models
{
    public class User
    {
        public int Id { get; set; }
        public Boolean Is_firsttime { get; set; } = true;
        public int Age { get; set; }
        public int Gender_id { get; set; }
        public DateTime created_at = DateTime.Now;

    }
}
