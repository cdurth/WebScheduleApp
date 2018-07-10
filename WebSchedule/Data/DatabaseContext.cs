using Microsoft.EntityFrameworkCore;
using WebScheduleApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using WebScheduleApp.Models.Auth;
using Microsoft.AspNetCore.Identity;

namespace WebScheduleApp.Data
{
    public class DatabaseContext : IdentityDbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }
    }
}
