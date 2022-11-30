Car mazda = new Car("Mazda3", 4, "White", true, 100, 0);
Horse horsey = new Horse("Horsey", 2, "Chestnut", 35, 0);
Bicycle bike = new Bicycle("Bike", 1, "Blue", 25, 0);

mazda.ShowInfo();
mazda.GiveFuel(50);
mazda.Travel(10000);

horsey.ShowInfo();
horsey.GiveFuel(10);
horsey.Travel(50);

bike.Travel(10);