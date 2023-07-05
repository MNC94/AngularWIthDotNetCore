using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Threading.Tasks;  
using AngularWIthDotNetCore.Models;  
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularWIthDotNetCore.Controllers
{
    [Route("api/[controller]")]
    //[Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {


        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(ILogger<EmployeeController> logger)
        {
            _logger = logger;
        }

        EmployeeDataAccessLayer objemployee = new EmployeeDataAccessLayer();
        // GET: api/<EmployeeController>

        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<TblEmployee> Index()
        {
            return objemployee.GetAllEmployees();
        }
        [HttpGet]
        [Route("api/Employee/Details/{id}")]
        public TblEmployee Details(int id)
        {
            return objemployee.GetEmployeeData(id);
        }


        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet]
        [Route("api/Employee/GetCityList")]
        public IEnumerable<TblCity> Details()
        {
            return objemployee.GetCities();
        }
    }
}
