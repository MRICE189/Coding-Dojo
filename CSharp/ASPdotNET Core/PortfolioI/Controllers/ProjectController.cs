using Microsoft.AspNetCore.Mvc;
// Be sure to use your own project's namespace here! 
namespace PortfolioI.Controllers;
public class ProjectController : Controller
{      
    [HttpGet] 
    [Route("")]
    public string Index()
    {
        return "This is my Index!";
    }

    [HttpGet("projects")]
    public string Projects()
    {
        return "These are my projects!";
    }

    [HttpGet("contact")]
    public string Contact()
    {
        return "This is my contact info!";
    }
}