using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        string myString = "This is a ViewModel string.";
        return View("Index", myString);
    }

    [HttpGet("Numbers")]
    public IActionResult Numbers()
    {
        int[] myIntArr = {1,2,3,4};
        return View("Numbers", myIntArr);
    }

    [HttpGet("User")]
    public IActionResult User()
    {
        User newUser = new User()
        {
            FirstName = "Matt",
            LastName = "Rice"
        };
        return View("User", newUser);
    }

    [HttpGet("Users")]
    public IActionResult Users()
    {
        User newUser = new User()
        {
            FirstName = "Matt",
            LastName = "Rice"
        };
        User secondUser = new User()
        {
            FirstName = "Tom",
            LastName = "Rice"
        };
        User thirdUser = new User()
        {
            FirstName = "Larry",
            LastName = "Rice"
        };
        List<User> userList = new List<User>();
        userList.Add(newUser);
        userList.Add(secondUser);
        userList.Add(thirdUser);
        return View("Users", userList);
    }
}
