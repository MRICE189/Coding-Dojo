import random

class Character:
    def __init__(self, name, strength, speed, health):
        self.name = name
        self.strength = strength
        self.speed = speed
        self.health = health

    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def show_remaining_health(self):
        print(f"{self.name} has {self.health} health remaining.")

    def attack(self, enemy):
        damage = random.randint(1, self.strength)
        enemy.health -= damage
        print(f"{self.name} attacks {enemy.name} for {damage} points of damage.")
        if enemy.health < 0:
            enemy.health = 0
        return self
        