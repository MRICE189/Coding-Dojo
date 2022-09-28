class Zoo:
    def __init__(self, name):
        self.animals = []
        self.name = name
    def add_lion(self, name, age, health=50, energy=100):
        self.animals.append(Lion(name, age, health, energy))
    def add_tiger(self, name, age, health=70, energy=70):
        self.animals.append(Tiger(name, age, health, energy))
    def add_bear(self, name, age, gender, health=100, energy=50):
        self.animals.append(Bear(name, age, gender, health, energy))
    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()

class Animal:
    def __init__(self, name, age, health, energy):
        self.name = name
        self.age = age
        self.health = health
        self.energy = energy

    def display_info(self):
        print(self.name, self.age, self.health, self.energy)

    def feed_animal(self):
        self.energy += 10
        self.health += 10
        print(f"{self.name} is very happy with the food and now has {self.health}Health and {self.energy}Energy")

class Lion(Animal):
    def __init__(self, name, age, health, energy):
        super().__init__(name, age, health=health, energy=energy)

class Tiger(Animal):
    def __init__(self, name, age, health, energy):
        super().__init__(name, age, health, energy)
    def feed_animal(self):
        self.energy +=20
        self.health += 5
        print(f"{self.name} is very happy with the food and now has {self.health}Health and {self.energy}Energy")

class Bear(Animal):
    def __init__(self, name, age, gender, health, energy):
        super().__init__(name, age, health, energy)
        self.gender = gender
    def feed_animal(self):
        self.energy -=10
        self.health += 20
        print(f"{self.name} is very happy with the food and now has {self.health}Health and {self.energy}Energy")

        return self

zoo1 = Zoo("Matt's Zoo")
zoo1.add_bear('Bear', 10, 'male', 100, 50)
zoo1.add_tiger(name='Tiger', age=5)
zoo1.add_lion('Lion', 7, 50, 100)
zoo1.print_all_info()
zoo1.animals[0].feed_animal()


