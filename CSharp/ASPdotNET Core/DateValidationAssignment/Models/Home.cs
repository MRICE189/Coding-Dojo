namespace DateValidationAssignment.Models;
using System.ComponentModel.DataAnnotations;

public class Home {
    [DateInPast]
    public DateTime GivenDate {get;set;}
}

public class DateInPastAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        DateTime dateGiven = (DateTime)value;
        System.Console.WriteLine(dateGiven);
        if (dateGiven < DateTime.Now)
        {
            return ValidationResult.Success;
        } else {
            return new ValidationResult("Date must be in the past.");
        }
    }
}