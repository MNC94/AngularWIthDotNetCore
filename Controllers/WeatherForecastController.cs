using AngularWIthDotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace AngularWIthDotNetCore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
       


        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }


        //[HttpGet]
        //[Route("WeatherForecast/Index")]
        //public IEnumerable<string> Index()
        //{
        //     return new string[] { "value1", "value2" };
        //}


        [HttpGet]
        [Route("Index")]
        public IEnumerable<WeatherForecast> indexindex()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }


    }
}