using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FileHelpers;

namespace VolunteerManagementApp.Classes
{
    [DelimitedRecord(",")]
    public class VolunteerCS
    {
        public int VolId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public bool Standout { get; set; }
        public bool PhoneBank { get; set; }
        public bool Canvas { get; set; }

        public VolunteerCS()
        {

        }

        public VolunteerCS(int volId, string first, string last, string phone, string email, string city, bool standOut, bool phoneBank, bool canvas)
        {
            VolId = volId;
            FirstName = first;
            LastName = last;
            Phone = phone;
            Email = email;
            City = city;
            Standout = standOut;
            PhoneBank = phoneBank;
            Canvas = canvas;
        }
    }
}