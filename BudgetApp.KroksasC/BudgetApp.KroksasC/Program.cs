using Microsoft.EntityFrameworkCore;
using BudgetApp.KroksasC.Models;
using TodoList.KroksasC.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<GenericDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BudgetAppContext") ?? throw new InvalidOperationException("Connection string 'TodoContext' not found.")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
app.UseDefaultFiles();
app.UseStaticFiles();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
