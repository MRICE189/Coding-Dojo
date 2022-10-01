import unittest

class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        for numb in nums:
            self.result += numb
        self.result += num
        return self

    # def subtract(self, num, *nums):
    #     pass

md = MathDojo()

class addTest(unittest.TestCase):

    def setUp(self):
        md_test = MathDojo()
        return md_test
    def test_one(self):
        self.assertEqual(self.setUp().add(1,2,3).result, 6)
    def test_two(self):
        self.assertEqual(self.setUp().add(1,3,4,7).result, 15)
    def test_three(self):
        self.assertEqual(self.setUp().add(1).result, 1)


if __name__ == '__main__':
    unittest.main()
