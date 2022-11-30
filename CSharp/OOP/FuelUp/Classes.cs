abstract class Vehicle
{
    public string Name;
    public int Passengers;
    public string Color;
    public bool HasEngine;
    public int TopSpeed;
    public int Miles;

    public Vehicle(string n, int p, string c, int tS, int mi, bool hE)
    {
        Name = n;
        Passengers = p;
        Color = c;
        HasEngine = hE;
        TopSpeed = tS;
        Miles = mi;
    }

    public void ShowInfo()
    {
        System.Console.WriteLine(Name + " " + Passengers + " " + Color + " "  + HasEngine + " " + TopSpeed + " " + Miles);
    }

    public void Travel(int distance)
    {
        Miles = Miles + distance;
        System.Console.WriteLine("Total miles travelled: " + Miles);
    }
}

class Car : Vehicle, INeedFuel
{
    public string FuelType {get;set;}
    public int FuelTotal {get;set;}

    public Car(string n, int p, string c, bool hE, int tS, int mi) : base(n, p, c, tS, mi, hE)
    {
        FuelTotal = 10;
        FuelType = "Gasoline";
    }

    public void GiveFuel(int amount)
    {
        FuelTotal+=50;
        System.Console.WriteLine($"You fuel up {Name}, which now has {FuelTotal} fuel.");
    }
}

class Horse : Vehicle, INeedFuel
{
    public string FuelType {get;set;}
    public int FuelTotal {get;set;}

    public Horse(string n, int p, string c, int tS, int mi, bool hE = false) : base(n, p, c, tS, mi, hE)
    {
        FuelTotal = 10;
        FuelType = "Hay";
    }

    public void GiveFuel(int amount)
    {
        FuelTotal+=20;
        System.Console.WriteLine("The horse eats some hay.");
    }
}

class Bicycle : Vehicle
{
    public Bicycle(string n, int p, string c, int tS, int mi, bool hE = false) : base(n, p, c, tS, mi, hE)
    {

    }
}