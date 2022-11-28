# CSharp Fundamentals

## Starting a Project
```
dotnet new console -o ProjectName
```
### Program.cs
- this is where we'll be writing most of our code
### ProjectName.csproj
- dependencies go here and can be installed using:
```
dotnet restore
```

### Run a file, while in the project folder
```
dotnet run
```
---
## Variables
### Primitive Variables
- variables must be given a type upon declaration:
```csharp
int age = 32;
double height = 1.875;
string name = "Matt"
bool blueEyes = true;
```
- string interpolation
```csharp
string place = "Coding Dojo";
// Interpolated string, note the $
Console.WriteLine($"Hello {place}");
//Another method:
Console.WriteLine("Hello {0}", place);
```
### Other Variable Types
> Lists vs. Arrays
- Arrays are fixed length:
```cs
//Arrays can be initialized with only a set length and all null values
//[null, null, null, null]
string[] groceryList = new string[4];

//Arrays can also be initialized with starting values
string[] groceryList2 = {"Carrots", "Turkey", "Bread", "Milk"};

//Array values can be changed, but the length is fixed and cannot change
groceryList2[2] = "Ham";

//It is possible to declare an array without initialization, but you must use the new operator once you do define the array's values:
int[] array1;
array1 = new int[] {1,3,5,7,9};

//To get the size of an array:
Console.WriteLine(groceryList.Length);
```
- Lists are more malleable and variable length:
```cs
List<int> numberList = new List<int>();
numberList.Add(3);
//Adds 3 to the list
numberList.Remove(3);
//This removes the first instance of value of 3, not the index
numberList.RemoveAt(3);
//This removes the value at index 3
numberList.Insert(1, 5);
//This inserts the value 5 at index 1

//To initialize with values:
List<string> stringList = new List<string>(){"string1", "string2", "string3"};

//To get the length of a list:
Console.WriteLine(numberList.Count);
```
> Dictionaries
- Look and are implemented very similarly to lists, but instead of indexes dictionaries use key-value pairs.
- The type of both the key and value must be specified when initializing the dictionary
```cs
Dictionary<string,string> profile = new Dictionary<string,string>();

profile.Add("Name", "Matt");
profile.Add("Location", "Chicago");

//Pull values out using the key name in square brackets:
Console.WriteLine("Name - " + profile["Name"]);
```
---

## Conditionals
```cs
int temp = 75;
if(temp >= 72)
{
    Console.WriteLine("It's beautiful outside!");
} else {
    Console.WriteLine("It's gross outside!");
}
```
---
## Loops

### For Loops
```cs
for(int i=0; i <= 5; i++)
{
    Console.WriteLine(i);
}
```
### While Loops
```cs
int i = 1;
while(i <= 5)
{
    Console.WriteLine(i);
    i++;
}
```

### Looping through arrays
```cs
//Standard loop
for (int i=0; i<array.Length; i++) 
{
    Console.WriteLine(i);
}

//Foreach loop
foreach (string car in myCarsArr)
{
    Console.WriteLine($"I own a {car}");
}

//Note for printing array values:  You must use a loop to split the values first.
int[] array = {1,2,3,4,5};

//Values on individual lines:
foreach (int i in array)
{
    Console.WriteLine(i);
}
//Output:
//1
//2
//3
//4
//5

//Values all on one line:
foreach (int i in array)
{
    Console.Write("{0}", i);
}
//Output: 1 2 3 4 5

//Values on one line with commas:
for (int i=0; i<array.Length; i++)
{
    Console.Write(array[i]);
    if (i < array.Length-1)
    {
        Console.Write(", ");
    }
}
//Output: 1, 2, 3, 4, 5
```

### Looping through dictionaries
```cs
//Need a slightly modified approach than looping through arrays:
foreach (KeyValuePair<string,string> entry in dictionary)
{
    Console.WriteLine($"{entry.Key} - {entry.Value}");
}
```
---
## Random Numbers
- C# has a built-in class called Random that can be used to generate random numbers
- create an instance of Random class and then use the .Next() method (performs a mathematica operation on a seed value)
```cs
Random rand = new Random();
for(int i=1; i <= 10; i++)
{
    Console.WriteLine(rand.Next(2,8));
}
```
- this will generate 10 random numbers between 2 and 7 (the 8 is exclusive)

---
## Functions
```cs
static void SayHello()
{
    Console.WriteLine("Hello!");
}
```
### Static
- this keyword controls how we can invoke the function in our code
- static functions can be called within the scope of its definition or by calling it on the class it's defined in.
- non-static methods MUST be called on an instance of an object
### Void
- functions must declare their return type, much like variables
- functions that return "nothing" have the type void
- if the function returned an integer, we would replace void with int
### Invoking a function
```cs
SayHello();
// call the name of the function followed by () with any arguments inside the parenthesis
```
### Function Parameters
```cs
static void SayHello(string firstName = "Matt")
//default paramater of "Matt" (optional)
{
    Console.WriteLine($"Hello, {firstName}. how are you?");
}

//Arguments can overwrite default params
SayHello("Andrew");
```
### Returns
- return type must be declared with the function
```cs
static string SayHello(string firstName = "Matt")
{
    return $"Hello, {firstName}";
}
string greeting;
greeting = SayHello();
Console.WriteLine(greeting);
```
---
## Converting Data Types
### TryParse
- tries to parse out what a value is and, if successful, will return the value in the data type that you asked for.  If unsuccessful, it returns nothing.
```cs
string NumberInput = Console.ReadLine();
//try to parse the input (by default a string) 
if (Int32.TryParse(NumberInput, out int j))
{
    // used j as a reference for the new int
    Console.WriteLine($"The integer was {j}");
}
// If you entered 12 into the input line it would display "The integer was 12", but if you entered a string or decimal, it would do nothing because it failed to parse the input to an int.
```
### Convert
- built-in class designed to convert data types, much like TryParse.  Unlike TryParse, it will throw an error if the value passed in cannot be converted.  When using convert, you must be certain that what you pass in will be a valid conversion
```cs
string aNumber = "7";
int converted = Convert.ToInt32(aNumber);
// converts "7" to an integer 7
string aDecimal = "3.14";
double convertDecimal = Convert.ToDouble(aDecimal);
// converts "3.14" to double 3.14
```
### Type Casting
- converts similar or ambiguous data types into other types.  Type casting is only suitable when you already are 100% certain about what you're working with.
> Implicit Casting
- directly converts a variable from one type to another as long as there is no loss of data. ex. converting an int to a double
```cs
int IntValue = 3;
double DoubleValue = IntValue;
```
> Explicit Casting
- directly converts a variable from one type to another, with the understanding that this will cause a loss of information.
```cs
double DoubleVal = 3.14159;
int IntValue = (int)DoubleVal;
//loses all information stored to the right of the decimal place and converts it to an integer
```
> Unboxing
- we can use **object** as our data type to get around needing to explicitly declare a data type upon creation
```cs
object BoxedData = "This is clearly a string";
```
- we can then use the **is** keyword in a conditional statement to figure out the type of data
```cs
if (BoxedData is int)
{
    Console.WriteLine("This is an int in the box.");
}
if (BoxedData is string)
{
    Console.WriteLine("This is a string in the box.");
}
```
- **NOTE:** It is not good practice to use object as a data type.
> Safe Explicit Casting
- You can safely use explicit casting by using the **as** keyword.  This will make the casting return a **null** value if it fails, rather than an error.
- the exception is that the values that can safely be cast can only be of types that are nullable.  String are an example of types that can hold "null" as a value, but integers cannot and therefore cannot work with safe casting.
```cs
object ActuallyString = "a string";
string ExplicitlyString = ActuallyString as string;
//Following will NOT work:
object ActuallyInt = 256;
int ExplicitlyInt = ActuallyInt as int;
```
---
