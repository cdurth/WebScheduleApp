using WebScheduleApp.Models.Auth;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebScheduleApp.Models
{
    public class TestModel
    {
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual User ApplicationUser { get; set; }
    }
}
 