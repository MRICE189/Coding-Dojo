class Underscore:
    def map(self, iterable, callback):
        new_list = []
        for each in iterable:
            new_list.append(callback(each))
        return new_list

    def find(self, iterable, callback):
        for each in iterable:
            if callback(each):
                return each
        return 

    def filter(self, iterable, callback):
        new_list = []
        for each in iterable:
            if callback(each):
                new_list.append(each)
        return new_list

    def reject(self, iterable, callback):
        new_list = []
        for each in iterable:
            if not callback(each):
                new_list.append(each)
        return new_list

# you just created a library with 4 methods!
# let's create an instance of our class

_ = Underscore() # yes we are setting our instance to a variable that is an underscore

mapped = _.map([1,2,3], lambda x: x * 2)
print(mapped)

found_even = _.find([1,2,3,4], lambda x: x % 2 == 0)
print(found_even)

evens = _.filter([1,2,3,4,5,6,7,8,10], lambda x: x % 2 == 0)
print(evens)

not_evens = _.reject([1,2,3,4,5,6,7,8,10], lambda x: x % 2 == 0)
print(not_evens)
