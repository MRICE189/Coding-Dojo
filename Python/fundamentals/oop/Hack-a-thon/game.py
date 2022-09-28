from classes.ninja import Ninja
from classes.pirate import Pirate

michelangelo = Ninja("Michelangelo", 10, 4, 100)
jack_sparrow = Pirate("Jack Sparrow", 15, 5, 100)

michelangelo.show_stats()
jack_sparrow.show_stats()

i=0
while (i+1):
    i+=1
    if (i % michelangelo.speed == 0):
        michelangelo.attack(jack_sparrow)
        jack_sparrow.show_remaining_health()
        if jack_sparrow.health <= 0:
            print("Michelangelo wins!")
            break
    if (i % jack_sparrow.speed == 0):
        jack_sparrow.attack(michelangelo)
        michelangelo.show_remaining_health()
        if michelangelo.health <= 0:
            print("Jack Sparrow wins!")
            break