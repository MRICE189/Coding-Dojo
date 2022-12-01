using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurveyWithModel.Models;

namespace DojoSurveyWithModel.Controllers;

public class HomeController : Controller
{
    [HttpGet("")]
    public IActionResult Index()
    {
        return View("Index");
    }

    [HttpPost("submit")]
    public IActionResult Submit(User userInstance)
    {
        if (userInstance.Comment == null) 
        {
            userInstance.Comment = "No Comment";
        }
        return View("Results", userInstance);
    }
}

