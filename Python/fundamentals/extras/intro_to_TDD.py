import unittest
# 1. reverseList - Write a function that reverses the values in the list (without creating a temporary array).
# Example: reverseList([1,3,5]) should return [5,3,1]
# Example Test: assertEqual( reverseList([1,3,5]), [5,3,1] )
# Add at least 3 other test cases

def reverseList(list):
    for idx in range(0, len(list)):
        if idx < len(list)/2:
            temp = list[idx]
            list[idx] = list[len(list) - (1+idx)]
            list[len(list) - (1+idx)] = temp
    return list

class reverseListTests(unittest.TestCase):
    def test_one(self):
        self.assertEqual(reverseList([1,2,3,4]), [4,3,2,1])
    
    def test_two(self):
        self.assertEqual(reverseList([1,2,3,4,5]), [5,4,3,2,1])

    def test_three(self):
        self.assertEqual(reverseList([1,3,5,7,3,4]), [4,3,7,5,3,1])

# 2.isPalindrome - Write a function that checks whether the given word is a palindrome (a word that spells the same backward).
# Example: isPalindrome("racecar") should return True
# Example Test: assertEqual( isPalindrome("racecar"), True ) or assertTrue( isPalindrome("racecar"))
# Example Test: assertFalse( isPalindrome("rabcr") ).
# Add at least 5 other test cases

def isPalindrome(string):
    for idx in range(len(string)):
        if idx < len(string)/2:
            if string[idx] != string[len(string) - (1+idx)]:
                return False
    return True

class palindromeTest(unittest.TestCase):
    def test_one(self):
        self.assertTrue(isPalindrome('racecar'))
    def test_two(self):
        self.assertTrue(isPalindrome('e racecar e'))
    def test_three(self):
        self.assertTrue(isPalindrome('extrartxe'))
    def test_four(self):
        self.assertFalse(isPalindrome('racecars'))
    def test_five(self):
        self.assertFalse(isPalindrome('ecar'))

# 3. coins - Write a function that determines how many quarters, dimes, nickels, and pennies to give to a customer for a change where 
# you minimize the number of coins you give out.
# Example: given 87 cents, result should be 3 quarters, 1 dime, 0 nickel and 2 pennies
# Example Test: assertEqual( coin(87), [3,1,0,2] )
# Add at least 5 other test cases

def coins(cents):
    cents_remaining = cents
    change = {
        'quarters': 0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }
    while (cents_remaining > 0):
        if cents_remaining >= 25:
            change['quarters'] += 1
            cents_remaining  -= 25
        elif cents_remaining >= 10:
            change['dimes'] += 1
            cents_remaining  -= 10
        elif cents_remaining >= 5:
            change['nickels'] += 1
            cents_remaining  -= 5
        elif cents_remaining >= 1:
            change['pennies'] += 1
            cents_remaining  -= 1
    return f"{change['quarters']} quarters, {change['dimes']} dimes, {change['nickels']} nickels, and {change['pennies']} pennies."

class coinsTest(unittest.TestCase):
    def test_one(self):
        self.assertEqual(coins(50), '2 quarters, 0 dimes, 0 nickels, and 0 pennies.')
    def test_two(self):
        self.assertEqual(coins(60), '2 quarters, 1 dimes, 0 nickels, and 0 pennies.')
    def test_three(self):
        self.assertEqual(coins(87), '3 quarters, 1 dimes, 0 nickels, and 2 pennies.')
    def test_four(self):
        self.assertEqual(coins(23), '0 quarters, 2 dimes, 0 nickels, and 3 pennies.')
    def test_five(self):
        self.assertEqual(coins(32), '1 quarters, 0 dimes, 1 nickels, and 2 pennies.')


# 4. BONUS - factorial - Write a recursive function that returns the factorial of a given number. Remember that the factorial of a 
# number is the product of all the numbers between 1 and the given number (eg. 4! = 4*3*2*1).
# Example: factorial(5) should return 120.
# Add at least 3 test cases

def factorial(nums):
    total = 1
    for idx in range(nums, 1, -1):
        total*= (idx)
    return total

class factorialTest(unittest.TestCase):
    def test_one(self):
        self.assertEqual(factorial(4), 24)
    def test_two(self):
        self.assertEqual(factorial(5), 120)
    def test_three(self):
        self.assertEqual(factorial(3), 6)


# 5. BONUS - fibonacci - Write a recursive function that accepts a number, n, and returns the nth Fibonacci number from the sequence. 
# The first two Fibonacci numbers are 0 and 1. Every number after that is calculated by adding the previous 2 numbers from the sequence. (i.e. 0, 1, 1, 2, 3, 5, 8, 13, 21 ...)

def fibonacci(num):
    sequence = [0,1]
    for i in range(num):
        if i > 1:
            sequence.append(sequence[i-2]+sequence[i-1])
    return sequence[num-1]


class fibTest(unittest.TestCase):
    def test_one(self):
        self.assertEqual(fibonacci(3), 1)
    def test_two(self):
        self.assertEqual(fibonacci(5), 3)
    def test_three(self):
        self.assertEqual(fibonacci(7), 8)


if __name__ == '__main__':
    unittest.main()