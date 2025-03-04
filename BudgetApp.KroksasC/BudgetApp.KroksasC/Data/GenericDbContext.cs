using BudgetApp.KroksasC.Models;
using Microsoft.EntityFrameworkCore;

namespace TodoList.KroksasC.Data
{
    public class GenericDbContext : DbContext
    {
        public GenericDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Category> Categories { get; set; } = null!;
        public DbSet<Transaction> Transactions { get; set; } = null!;
    }
}