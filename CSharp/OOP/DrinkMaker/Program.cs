Soda coke = new Soda("Coke", "Brown", 35.00, true, 300, false);
Soda diet = new Soda("Diet Coke", "Brown", 35.00, true, 250, true);
Coffee latte = new Coffee("Latté", "Brown", 100.00, false, 150, "Dark", "Columbian");
Wine malbec = new Wine("Malbec", "Red", 70.00, false, 200, "West Coast", 2020);

List<Drink> allDrinks = new List<Drink>(){coke, diet, latte, malbec};

foreach (Drink d in allDrinks)
{
    d.ShowInfo();
}