using BudgetApp.KroksasC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoList.KroksasC.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BudgetApp.KroksasC.Controllers
{
    [Route("api/transaction")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly GenericDbContext _context;

        public TransactionController(GenericDbContext context) => _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transaction>>> GetTransactions()
        {
            return await _context.Transactions
            .Include(t => t.Category) // Eagerly load related category
            .ToListAsync();

            
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Transaction>> GetTransaction(int id)
        {
            var transactions = await _context.Transactions.FindAsync(id);

            if (transactions == null)
            {
                return NotFound();
            }

            return transactions;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransactions(int id, Transaction transaction)
        {
            if (id != transaction.Id)
            {
                return BadRequest();
            }
            var categoryToUpdate = await _context.Categories.FirstOrDefaultAsync(c => c.Id == transaction.Category.Id);
            if (categoryToUpdate == null)
            {
                return BadRequest("Category not found.");
            }
            transaction.Category = categoryToUpdate;

            _context.Transactions.Entry(transaction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransactionsExist(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
        [HttpPost]
        public async Task<ActionResult<Transaction>> PostTransaction(Transaction transaction)
        {
            var categoryToUpdate = await _context.Categories.FirstOrDefaultAsync(c => c.Id == transaction.Category.Id);

            if (categoryToUpdate == null)
            {
                return BadRequest("Category not found.");
            }

            transaction.Category = categoryToUpdate;

            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostTransaction), new { id = transaction.Id }, transaction);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTransaction(int id)
        {
            var todo = await _context.Transactions.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Transactions.Remove(todo);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        private bool TransactionsExist(int id)
        {
            return _context.Transactions.Any(e => e.Id == id);
        }
    }
}
