#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TheWall.Models;

public class User
{
    [Key]
    public int UserId { get; set; }
    [Required]
    public string FirstName { get; set; } 
    [Required]
    public string LastName { get; set; } 
    [Required]
    [EmailAddress]
    [UniqueEmail]
    public string Email { get; set; }
    [Required]
    [DataType(DataType.Password)]
    [MinLength(8)]
    public string Password { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    [NotMapped]
    [Compare("Password")]
    [DataType(DataType.Password)]
    public string ConfirmPw {get;set;}

    public List<Message> UserMessages {get;set;} = new List<Message>();
    public List<Comment> UserComments {get;set;} = new List<Comment>();

}

public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if(value == null)
        {
            return new ValidationResult("Email is required!");
        }
    	// This will connect us to our database since we are not in our Controller
        MyContext _context = (MyContext)validationContext.GetService(typeof(MyContext));
        // Check to see if there are any records of this email in our database
        if (_context.Users.Any(e => e.Email == value.ToString()))
        {
            // If yes, throw an error
            return new ValidationResult("Email must be unique!");
        }
        else
        {
            // If no, proceed
            return ValidationResult.Success;
        }
    }
}