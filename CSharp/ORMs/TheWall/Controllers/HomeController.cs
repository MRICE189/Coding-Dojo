using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TheWall.Models;

namespace TheWall.Controllers;

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
