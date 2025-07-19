namespace server.Features.Projects.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Type { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Url { get; set; } = "";
    }
}

