using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Models
{
	public class Customer
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public DateTime Birthday { get; set; }
		public float Height { get; set; }
		public float Width { get; set; }
		public string BloodType { get; set; }

		public Customer(int id, string name, string lastName)
		{
			Id = id;
			Name = name;
			LastName = lastName;
		}
	}
}
