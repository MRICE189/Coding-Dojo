# Basic - all integers from 0 to 150
for i in range(151):
    print(i)

#Multiples of 5 5-1000
for i in range(5,1001,5):
    print(i)

#Counting - print integers 1-100. if divisible by 5 print Coding, if divisible by 10, print Coding Dojo
for i in range(1, 101):
    if (i%10 == 0):
        print("Coding Dojo")
    elif (i%5 == 0):
        print("Coding")
    else:
        print(i)

#Huge - add odd integers from 0 to 500,000 and print final sum
sum = 0
for i in range(0,500001):
    if (i%2==1):
        sum+=i
print(sum)

#Countdown by Fours - print positive numbers starting at 2018 and count down by 4s
for i in range(2018, -1, -4):
    print(i)

#flexible counter - Set 3 variables low, high and mult.   Going from low to high, print only integers that are a multiple of mult
lowNum = 10
highNum = 50
mult = 7
for i in range(lowNum, highNum):
    if (i%mult == 0):
        print(i)
