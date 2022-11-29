Vehicle Mazda = new Vehicle("Mazda 3", 4, "White", true, 100);
Vehicle Bug = new Vehicle("VW Beetle", 2, "Yellow", true, 90);
Vehicle Mystery = new Vehicle("Mystery Machine", 4, "Green", true, 50);
Vehicle Ford = new Vehicle("Fusion", "Blue");

List<Vehicle> vehicles = new List<Vehicle>(){Mazda, Bug, Mystery, Ford};

foreach (Vehicle car in vehicles)
{
    car.ShowInfo();
}

Mazda.Travel(100);
Mazda.ShowInfo();
