using server.Features.Users.Models;

namespace server.Features.Questions.Models
{
    public class Survey { 
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; } = "";
        public DateTime created_at { get; set; } = DateTime.Now;
    }

    public class Question { 
        public int Id { get; set; } 
        public int Survey_id { get; set; }
        public Survey? Survey { get; set; }
        public string Question_text { get; set; } = string.Empty;
        public int Question_type { get; set; }
        public Boolean Is_required { get; set; } = false;
    }

    public class Response { 
        public int Id { get; set; }
        public int Survey_id { get;set; }
        public Survey? Survey{ get; set; }
        public int User_id { get; set; }
        public User? User {  get; set; }
        public DateTime Responded_at {  get; set; } = DateTime.Now;
    }

    public class Answer { 
        public int Id { get; set; }
        public int Response_id { get; set; }
        public Response? Response { get; set; }
        public int Question_id { get; set; }
        public Question? Question { get; set; }
        public string Answer_text { get; set; } = string.Empty;
    }




}
