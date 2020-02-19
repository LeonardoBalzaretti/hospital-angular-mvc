using Hospital.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace Hospital.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private List<Customer> customers = new List<Customer>
        {
            new Customer(12, "Leonardo", "Balzaretti"),
            new Customer(13, "Maria", "Heloisa")
        };
        private readonly ILogger<CustomerController> _logger;

        public CustomerController(ILogger<CustomerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return customers.ToArray();
        }
    }
}