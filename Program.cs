using AngularWIthDotNetCore.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();


builder.Services.AddCors((setup) =>
{
    setup.AddPolicy("default", (Options)
         =>
        {
            Options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
        });
});
//builder.Services.AddDbContext<CompanyContext>(options => options.UseSqlServer(configuration.GetConnectionString("ConnStr")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
//pattern: "{controller}/{action}/{id?}");
pattern: "api/{controller}/{action}/{id?}");
app.UseEndpoints(endpoints =>
{
    // To load all attribute routes
    endpoints.MapControllers();
});

app.UseCors("default");
//app.MapControllers();
app.MapFallbackToFile("index.html"); ;

app.Run();
