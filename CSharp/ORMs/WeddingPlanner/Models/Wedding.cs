#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WeddingPlanner.Models;

public class Wedding
{
    [Key]
    public int WeddingId { get; set; }
    [Required]
    public int CreatorId {get;set;}
    [Required]
    public string WedderOne { get; set; }
    [Required]
    public string WedderTwo { get; set; }
    [Required]
    [DataType(DataType.Date)]
    [Display(Name = "Date of Wedding?")]
    [DateInFuture]
    public DateTime DateOfWedding { get; set; }
    [Required]
    [MinLength(10)]
    public string Address { get; set; }

    public List<Association> Attendees {get;set;} = new List<Association>();
}

public class DateInFutureAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        DateTime dateGiven = (DateTime)value;
        System.Console.WriteLine(dateGiven);
        if (dateGiven > DateTime.Now)
        {
            return ValidationResult.Success;
        }
        else
        {
            return new ValidationResult("Date must be in the future.");
        }
    }
}