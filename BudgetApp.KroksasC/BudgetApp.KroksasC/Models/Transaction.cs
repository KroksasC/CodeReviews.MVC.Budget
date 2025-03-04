using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetApp.KroksasC.Models
{
    [Table("Transactions")]
    public class Transaction
    {
        public int Id { get; set; }
        public DateTime TransactionDate {  get; set; }
        public decimal Amount { get; set; }
        public string? Description { get; set; }

        // Navigation property for the related Category
        public Category Category { get; set; }
    }
}
