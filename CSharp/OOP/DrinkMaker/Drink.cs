class Drink
{
    public string Name;
    public string Color;
    public double Temperature;
    public bool IsCarbonated;
    public int Calories;

    public Drink(string name, string color, double temp, bool isCarb, int cals)
    {
        Name = name;
        Color = color;
        Temperature = temp;
        IsCarbonated = isCarb;
        Calories = cals;
    }

    public virtual void ShowInfo()
    {
        System.Console.WriteLine(Name);
        System.Console.WriteLine(Color);
        System.Console.WriteLine(Temperature);
        System.Console.WriteLine(IsCarbonated);
        System.Console.WriteLine(Calories);
    }
}

class Soda : Drink
{
    public bool IsDiet;

    public Soda(string name, string color, double temp, bool isCarb, int cals, bool isDiet) : base(name, color, temp, isCarb, cals)
    {
        IsDiet = isDiet;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        System.Console.WriteLine(IsDiet);
    }
}

class Coffee : Drink
{
    public string Roast;
    public string Beans;

    public Coffee(string name, string color, double temp, bool isCarb, int cals, string roast, string beans) : base(name, color, temp, isCarb, cals)
    {
        Roast = roast;
        Beans = beans;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        System.Console.WriteLine(Roast);
        System.Console.WriteLine(Beans);
    }
}

class Wine : Drink
{
    public string Region;
    public int Year;

    public Wine(string name, string color, double temp, bool isCarb, int cals, string region, int year) : base(name, color, temp, isCarb, cals)
    {
        Region = region;
        Year = year;
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        System.Console.WriteLine(Region);
        System.Console.WriteLine(Year);
    }
}