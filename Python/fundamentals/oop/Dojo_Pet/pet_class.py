class Pet:
    def __init__(self, pet):
        self.name = pet['name']
        self.type = pet['type']
        self.tricks = pet['tricks']
        self.health = pet['health']
        self.energy = pet['energy']

    def play(self):
        print(str(self.name) + " has fun playing on their walk.")
        return self
    
    def eat(self):
        print(str(self.name) + " enjoys their food.")
        return self
    
    def noise(self):
        print(str(self.name) + " makes a big splash!")
        return self

    def sleep(self):
        print(str(self.name) + " goes to sleep.")
        return self

fluffy = {
    'name': 'fluffy', 
    'type': 'dog', 
    'tricks': 'fetch', 
    'health': 'healthy', 
    'energy': 'high'
}