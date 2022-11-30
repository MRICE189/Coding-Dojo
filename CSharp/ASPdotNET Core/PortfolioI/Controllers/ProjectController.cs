using Microsoft.AspNetCore.Mvc;
// Be sure to use your own project's namespace here! 
namespace PortfolioI.Controllers;
public class ProjectController : Controller
{      
    [HttpGet("")] 
    public ViewResult Index()
    {
        return View();
    }

    [HttpGet("projects")]
    public ViewResult Projects()
    {
        return View();
    }

    [HttpGet("contact")]
    public ViewResult Contact()
    {
        return View();
    }
}