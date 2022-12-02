using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FormSubmission.Models;

namespace FormSubmission.Controllers;

public class HomeController : Controller
{
    [HttpGet("")]
    public IActionResult Index()
    {
        return View("Index");
    }

    [HttpGet("results")]
    public IActionResult Results()
    {
        return View("Results");
    }

    [HttpPost("submit")]
    public IActionResult Submit(Form formData)
    {
        if (ModelState.IsValid)
        {
            return RedirectToAction("Results");
        } else {
            return View("Index");
        }
    }
}
