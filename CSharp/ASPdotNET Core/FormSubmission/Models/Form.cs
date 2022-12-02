#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace FormSubmission.Models;

public class Form
{   
    [Required]
    [MinLength(2)]
    public string Name {get;set;}
    [Required]
    [EmailAddress]
    public string Email {get;set;}
    [Required]
    [DataType(DataType.Date)]
    [DateInPast]
    public DateTime DoB {get;set;}
    [Required]
    [MinLength(8)]
    [DataType(DataType.Password)]
    public string Password {get;set;}
    [Required]
    [OddNumber]
    public int FavOdd {get;set;}
}

public class DateInPast : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        DateTime dateOfBirth = (DateTime)value;
        if (dateOfBirth < DateTime.Now)
        {
            return ValidationResult.Success;
        } else {
            return new ValidationResult("Date of birth must be in the past.");
        }
    }

}

public class OddNumber : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if ((int)value % 2 == 1)
        {
            return ValidationResult.Success;
        } else {
            return new ValidationResult("Number must be odd.");
        }
    }
    //for prime numbers do a loop from 1-number and anytime number%i == 0, increase the count by 1.  if count = 2, it was a prime number, otherwise was divisible cleanly by more than 1 and itself and not prime.
}