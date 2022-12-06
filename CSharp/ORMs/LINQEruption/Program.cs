List<Eruption> eruptions = new List<Eruption>()
{
    new Eruption("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new Eruption("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new Eruption("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new Eruption("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new Eruption("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new Eruption("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new Eruption("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new Eruption("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new Eruption("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new Eruption("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new Eruption("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new Eruption("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new Eruption("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
};
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
// PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");

// Execute Assignment Tasks here!

//First Chile eruption
Eruption? firstChile = eruptions.FirstOrDefault(e => e.Location == "Chile");
System.Console.WriteLine(firstChile.ToString());

//Find first from hawaaian islands
Eruption? firstHawaii = eruptions.FirstOrDefault(e => e.Location == "Hawaiian Is");
if (firstHawaii != null)
{
    System.Console.WriteLine(firstHawaii.ToString());
} else {
    System.Console.WriteLine("Did not find");
}

//find first Greenland
Eruption? firstGreenland = eruptions.FirstOrDefault(e => e.Location == "Greenland");
if (firstGreenland != null)
{
    System.Console.WriteLine(firstGreenland.ToString());
} else {
    System.Console.WriteLine("Did not find a Greenland eruption");
}

//first after 1900 and in NZ
Eruption? first1900NZ = eruptions.Where(e => e.Year > 1900).FirstOrDefault(l => l.Location == "New Zealand");
System.Console.WriteLine(first1900NZ.ToString());

//elevation > 2000
IEnumerable<Eruption> elevation2000Plus = eruptions.Where(e => e.ElevationInMeters > 2000);
PrintEach(elevation2000Plus, "Over 2000m");

//name starts with L and count of eruptions
IEnumerable<Eruption> lNames = eruptions.Where(e => e.Volcano.StartsWith("L"));
PrintEach(lNames, "Starts with L");
System.Console.WriteLine(lNames.Count());

//highest elevation int
int? highestElevation = eruptions.Max(e => e.ElevationInMeters);
System.Console.WriteLine(highestElevation);

IEnumerable<string> highestName = eruptions.Where(e => e.ElevationInMeters == highestElevation).Select(v => v.Volcano);
foreach (string v in highestName)
{
    System.Console.WriteLine(v);
}

// all volcano names alphabetically
IEnumerable<string> namesAlpha = eruptions.OrderBy(v => v.Volcano).Select(e => e.Volcano);
foreach (string v in namesAlpha)
{
    System.Console.WriteLine(v);
}

//sum of all elevations
int? sumElevations = eruptions.Sum(e => e.ElevationInMeters);
System.Console.WriteLine(sumElevations);

//any eruptions in 2000?
bool? any2000 = eruptions.Any(e => e.Year == 2000);
System.Console.WriteLine(any2000);

//first three statovolcanoes
IEnumerable<Eruption> firstThreeStrato = eruptions.Where(e => e.Type == "Stratovolcano").Take(3);
PrintEach(firstThreeStrato, "First 3 stratos");

//all eruptions before 1000 alphabetically according to name
IEnumerable<Eruption> before1000Alpha = eruptions.Where(e => e.Year < 1000).OrderBy(v => v.Volcano);
PrintEach(before1000Alpha, "Before 1000 alpha");

//just the name from last query
IEnumerable<string> before1000AlphaNameOnly = eruptions.Where(e => e.Year < 1000).OrderBy(v => v.Volcano).Select(n => n.Volcano);
foreach (string v in before1000AlphaNameOnly)
{
    System.Console.WriteLine(v);
}

// Helper method to print each item in a List or IEnumerable. This should remain at the bottom of your class!
static void PrintEach(IEnumerable<Eruption> items, string msg = "")
{
    Console.WriteLine("\n" + msg);
    foreach (Eruption item in items)
    {
        Console.WriteLine(item.ToString());
    }
}