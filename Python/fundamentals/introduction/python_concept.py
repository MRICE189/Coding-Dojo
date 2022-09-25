#variable declaration
num1 = 42
num2 = 2.3
boolean = True
string = 'Hello World'
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
fruit = ('blueberry', 'strawberry', 'banana')

#log statement
print(type(fruit))
print(pizza_toppings[1])

#list - add value
pizza_toppings.append('Mushrooms')

#dictionary - access value / log statement
print(person['name'])

#dictionary - change value
person['name'] = 'George'
person['eye_color'] = 'blue'

#list - access value / log statement
print(fruit[2])

#conditional if/else
if num1 > 45:
    print("It's greater")
else:
    print("It's lower")

#conditional if/elif/else / log statement / length check
if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")

#for loop
for x in range(5):
    print(x)
#for loop start2 stop 4
for x in range(2,5):
    print(x)
for loop start2, stop9, increment 3
for x in range(2,10,3):
    print(x)
#while loop start0 stop4
x = 0
while(x < 5):
    print(x)
    x += 1

#list delete last value
pizza_toppings.pop()
#list delete index1 value
pizza_toppings.pop(1)

print(person)
#dictionary delete value
person.pop('eye_color')
print(person)

#for loop
for topping in pizza_toppings:
    if topping == 'Pepperoni':
        #continue
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        #break
        break

#function
def print_hello_ten_times():
    #for loop
    for num in range(10):
        print('Hello')

#function
print_hello_ten_times()

#function parameter
def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

#function argument
print_hello_x_times(4)

#function parameter
def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

#function argument
print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)