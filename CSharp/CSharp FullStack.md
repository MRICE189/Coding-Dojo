# Full Stack Application Creation
## Terminal Setup
```
dotnet new mvc --no-https -o ProjectName
```
```
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 6.0.1
```
```
dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.3
```
---
## Main folder
### appsettings.json
```cs
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings":
  {        
        "DefaultConnection": "Server=localhost;port=3306;userid=root;password=root;database=DATABASE_NAME_HERE;"    
    }
}
```
### Program.cs
```cs
using Microsoft.EntityFrameworkCore;
using NAMESPACE.Models;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddControllersWithViews();
builder.Services.AddHttpContextAccessor();
builder.Services.AddSession();
builder.Services.AddDbContext<MyContext>(options =>
{
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});
var app = builder.Build();
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.UseSession();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.Run();
```
---
## Model Folder
### User.cs
```cs
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace NAMESPACE.Models;

public class User
{
    [Key]
    public int UserId { get; set; }
    [Required]
    public string FirstName { get; set; } 
    [Required]
    public string LastName { get; set; } 
    [Required]
    [EmailAddress]
    [UniqueEmail]
    public string Email { get; set; }
    [Required]
    [DataType(DataType.Password)]
    [MinLength(8)]
    public string Password { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    [NotMapped]
    [Compare("Password")]
    [DataType(DataType.Password)]
    public string ConfirmPw {get;set;}

    public List<Association> WeddingsAttending {get;set;} = new List<Association>();
}

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if(value == null)
        {
            return new ValidationResult("Email is required!");
        }
    	// This will connect us to our database since we are not in our Controller
        MyContext _context = (MyContext)validationContext.GetService(typeof(MyContext));
        // Check to see if there are any records of this email in our database
        if (_context.Users.Any(e => e.Email == value.ToString()))
        {
            // If yes, throw an error
            return new ValidationResult("Email must be unique!");
        }
        else
        {
            // If no, proceed
            return ValidationResult.Success;
        }
    }
}
```
### LoginUser.cs
```cs
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace NAMESPACE.Models;

public class LoginUser
{
    [Required]
    [EmailAddress]
    [Display(Name = "Email")]
    public string LoginEmail { get; set; }
    [Required]
    [DataType(DataType.Password)]
    [MinLength(8)]
    [Display(Name = "Password")]
    public string LoginPassword { get; set; }
}
```
### Association.cs
```cs
#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace NAMESPACE.Models;

public class Association
{
    [Key]
    public int AssociationId {get;set;}
    [Required]
    public int WeddingId {get;set;}
    [Required]
    public int UserId {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    public Wedding? Wedding {get;set;}
    public User? User {get;set;}
}
```
### MyContext.cs
```cs
#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
namespace NAMESPACE.Models;
public class MyContext : DbContext 
{   
    public MyContext(DbContextOptions options) : base(options) {}
    public DbSet<User> Users { get; set; }
    public DbSet<Wedding> Weddings { get; set; }
    public DbSet<Association> Associations { get; set; }
}
```
### MyViewModel.cs
```cs
#pragma warning disable CS8618
namespace NAMESPACE.Models;
public class MyViewModel
{    
    public User User {get;set;}
    public List<User> AllUsers {get;set;}

    public Wedding Wedding {get;set;}
    public List<Wedding> AllWeddings {get;set;}

    public Association Assoc {get;set;}
    public List<Association> AllAssociations {get;set;}
}
```
### Migration
```cs
dotnet ef migrations add FirstMigration
```
```cs
dotnet ef database update
```
---
## Controllers Folder
### HomeController.cs
```cs
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using NAMESPACE.Models;
namespace NAMESPACE.Controllers;
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    public IActionResult Index()
    {
        return RedirectToAction("LoginAndReg");
    }
}
```
### UserController.cs
```cs
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NAMESPACE.Models;
namespace NAMESPACE.Controllers;
public class UserController : Controller
{
    private readonly ILogger<UserController> _logger;
    private MyContext _context;

    public UserController(ILogger<UserController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("")]
    public IActionResult LoginAndReg()
    {
        return View("Index");
    }

    [HttpPost("users/create")]
    public IActionResult CreateUser(User newUser)
    {
        if (ModelState.IsValid)
        {
            PasswordHasher<User> hasher = new PasswordHasher<User>();
            newUser.Password = hasher.HashPassword(newUser, newUser.Password);
            _context.Add(newUser);
            _context.SaveChanges();
            HttpContext.Session.SetInt32("uuid", newUser.UserId);
            HttpContext.Session.SetString("Username", newUser.FirstName);
            return RedirectToAction("WallView", "Wall");
        } else {
            return View("Index");
        }
    }

    [HttpPost("users/login")]
    public IActionResult LoginUser(LoginUser loginUser)
    {
        if (ModelState.IsValid)
        {
            User? userInDb = _context.Users.FirstOrDefault(u => u.Email == loginUser.LoginEmail);
            if (userInDb == null) 
            {
                ModelState.AddModelError("LoginEmail", "Invalid credentials.");
                return View("Index");
            }
            PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
            var result = hasher.VerifyHashedPassword(loginUser, userInDb.Password, loginUser.LoginPassword);
            if (result == 0)
            {
                ModelState.AddModelError("LoginEmail", "Invalid credentials.");
                return View("Index");
            }
            //login success
            HttpContext.Session.SetInt32("uuid", userInDb.UserId);
            HttpContext.Session.SetString("Username", userInDb.FirstName);
            return RedirectToAction("WallView", "Wall");
        } else {
            return View("Index");
        }
    }

    [SessionCheck]
    [HttpPost("logout")]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return View("Index");
    }
}

public class SessionCheckAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        int? userId = context.HttpContext.Session.GetInt32("uuid");
        if(userId == null)
        {
            context.Result = new RedirectToActionResult("LoginAndReg", "User", null);
        }
    }
}
```
---
