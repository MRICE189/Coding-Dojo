#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TheWall.Models;

public class Comment
{
    [Key]
    public int CommentId {get;set;}
    [Required]
    [MinLength(2)]
    public string CommentText {get;set;}
    [Required]
    public int UserId {get;set;}
    [Required]
    public int MessageId {get;set;}
    public DateTime CreatedAt {get;set;} = DateTime.Now;
    public DateTime UpdatedAt {get;set;} = DateTime.Now;

    public User? User {get;set;}
    public Message? Message {get;set;}
}