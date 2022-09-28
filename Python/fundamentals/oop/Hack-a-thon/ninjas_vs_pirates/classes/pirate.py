from classes.characters import Character
import random

class Pirate(Character):

    def __init__(self, name, strength, speed, health):
        super().__init__(name, strength, speed, health)

    def attack(self, enemy):
        attack_num = random.randint(0, 3)
        if attack_num == 0:
            enemy.health -= 8
            print(f"{self.name} fires a cannonball at {enemy.name} dealing 10 points of damage.")
        elif attack_num == 1:
            print(f"{self.name} misses!")     
        else:
            super().attack(enemy)
        if enemy.health < 0:
            enemy.health = 0