class Vehicle
{
    private string Name;
    public string _Name
    {
        get { return Name; }
    }

    private int Passengers;
    public int _Passengers
    {
        get { return Passengers; }
    }
    
    private string Color;
    public string _Color
    {
        get { return Color; }
    }
    private bool HasEngine;
    public bool _HasEngine
    {
        get { return HasEngine; }
    }
    private int TopSpeed;
    public int _TopSpeed
    {
        get { return TopSpeed; }
    }
    private int Miles;
    public int _Miles
    {
        get { return Miles; }
    }

    public Vehicle(string name, int passengers, string color, bool hasEngine, int topSpeed)
    {
        Name = name;
        Passengers = passengers;
        Color = color;
        HasEngine = hasEngine;
        TopSpeed = topSpeed;
        Miles = 0;
    }
    public Vehicle(string name, string color, int passengers = 4, bool hasEngine = true, int topSpeed = 80)
    {
        Name = name;
        Passengers = passengers;
        Color = color;
        HasEngine = hasEngine;
        TopSpeed = topSpeed;
        Miles = 0;
    }

    public void ShowInfo()
    {
        Console.WriteLine("Name: " + Name);
        Console.WriteLine("Passengers: " + Passengers);
        Console.WriteLine("Color: " + Color);
        Console.WriteLine("Has Engine? " + HasEngine);
        Console.WriteLine("Top Speed: " + TopSpeed + "mph");
        Console.WriteLine("Miles: " + Miles);
    }

    public void Travel(int distance)
    {
        Miles = Miles + distance;
        System.Console.WriteLine("Total miles travelled: " + Miles);
    }
}
