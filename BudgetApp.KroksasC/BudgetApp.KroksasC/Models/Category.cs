using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BudgetApp.KroksasC.Models
{
    [Table("Categories")]
    public class Category
    {
        public int Id { get; set; }
        public string? CategoryName { get; set; }
        [JsonIgnore]
        public ICollection<Transaction>? Transactions { get; set; }
    }
    public class CategoryDto
    {
        public int Id { get; set; }
        public string? CategoryName { get; set; }
    }
}
