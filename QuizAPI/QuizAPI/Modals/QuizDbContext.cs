using Microsoft.EntityFrameworkCore;

namespace QuizAPI.Modals
{
    public class QuizDbContext:DbContext
    {
        public QuizDbContext(DbContextOptions<DbContext> options):base(options)
        {
            
        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }
    }
}
