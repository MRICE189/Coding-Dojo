class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        for numb in nums:
            self.result += numb
        self.result += num
        return self

    def subtract(self, num, *nums):
        for numb in nums:
            self.result -= numb
        self.result -= num
        return self

md = MathDojo()

x = md.add(1,2,3,4,5).add(1,2).subtract(5,1).result
print(x)