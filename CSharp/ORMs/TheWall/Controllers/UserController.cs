using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Identity;
using TheWall.Models;
using Microsoft.EntityFrameworkCore;

namespace TheWall.Controllers;

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