#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TheWall.Models;

public class Message
{
    [Key]
    public int MessageId {get;set;}
    [Required]
    [MinLength(2)]
    public string MessageText {get;set;}
    [Required]
    public int UserId {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    public User? User {get;set;}
    public List<Comment> MessageComments {get;set;} = new List<Comment>();
}