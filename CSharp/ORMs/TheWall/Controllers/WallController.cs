using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Identity;
using TheWall.Models;
using Microsoft.EntityFrameworkCore;

namespace TheWall.Controllers;

public class WallController : Controller
{
    private readonly ILogger<WallController> _logger;
    private MyContext _context;

    public WallController(ILogger<WallController> logger, MyContext context)
    {
        _logger = logger;
        _context = context;
    }

    [SessionCheck]
    [HttpGet("wall")]
    public IActionResult WallView()
    {
        MyViewModel MyModel = new MyViewModel
        {
            AllMessages = _context.Messages
                .Include(m => m.MessageComments)
                .Include(m => m.User)
                .OrderByDescending(m => m.CreatedAt)
                .ToList()
        };
        return View("WallView", MyModel);
    }

    [SessionCheck]
    [HttpPost("messages/create")]
    public IActionResult CreateMessage(Message newMessage)
    {
        int? poster = HttpContext.Session.GetInt32("uuid");
        newMessage.UserId = (int)poster;
        if (ModelState.IsValid)
        {
            _context.Add(newMessage);
            _context.SaveChanges();
            return RedirectToAction("WallView", "Wall");
        } else {
        return WallView();
        }
    }

    [SessionCheck]
    [HttpPost("comments/create")]
    public IActionResult CreateComment(Comment newComment)
    {
        int? poster = HttpContext.Session.GetInt32("uuid");
        newComment.UserId = (int)poster;
        if (ModelState.IsValid)
        {
            _context.Add(newComment);
            _context.SaveChanges();
            return RedirectToAction("WallView", "Wall");
        } else {
        return WallView();
        }
    }
}

