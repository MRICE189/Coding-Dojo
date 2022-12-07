#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace LoginAndReg.Models;

public class LoginUser
{
    // No other fields!
    [Required]   
    [EmailAddress]
    public string LoginEmail { get; set; }    
    [Required]    
    [DataType(DataType.Password)]
    public string LoginPassword { get; set; } 
}