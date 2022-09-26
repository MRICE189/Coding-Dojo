class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print("First name: " + self.first_name)
        print("Last name: " + self.last_name)
        print("Email: " + self.email)
        print("Age: " + str(self.age))
        if self.is_rewards_member == True:
            print("Rewards member: Yes\n")
            print("Gold card points: " + str(self.gold_card_points))
        else:
            print("Rewards member: No")

    def enroll(self):
        if self.is_rewards_member == True:
            print("User is already a member")
            return False
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
            return True

    def spend_points(self, amount):
        if self.gold_card_points >= amount:
            self.gold_card_points-=amount
            print("Spent " + str(amount) + " points.  New balance: " + str(self.gold_card_points))
        else:
            print("Not enough points")


user_matt = User("Matt", "Rice", "email@codingdojo.com", 33)
user_rob = User("Rob", "Garness", "email@codingdojo.com", 37)
user_joe = User("Joe", "Ramirez", "email@codingdojo.com", 32)

user_matt.display_info()
user_matt.enroll()
user_matt.display_info()

user_matt.spend_points(50)
user_rob.enroll()
user_rob.spend_points(80)

user_matt.display_info()
user_rob.display_info()
user_joe.display_info()

user_matt.enroll()
user_matt.spend_points(300)