using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DateValidationAssignment.Models;

namespace DateValidationAssignment.Controllers;

public class HomeController : Controller
{
    [HttpGet("")]
    public IActionResult Index()
    {
        return View("Index");
    }

    [HttpGet("date")]
    public IActionResult DateView(Home newDate)
    {
        return View("DateView", newDate);
    }

    [HttpPost("submit")]
    public IActionResult Submit(Home newDate)
    {
        if (ModelState.IsValid)
        {
            return RedirectToAction("DateView", newDate);
        } else {
            return View("Index");
        }
    }
}
