#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace WeddingPlanner.Models;

public class LoginUser
{
    [Required]
    [EmailAddress]
    public string LoginEmail { get; set; }
    [Required]
    [DataType(DataType.Password)]
    [MinLength(8)]
    public string LoginPassword { get; set; }
}
