class DLNode:
    def __init__(self, val):
        self.value = val
        self.next = None
        self.previous = None

class DList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_to_front(self, val):
        new_node = DLNode(val)
        current_head = self.head
        new_node.next = current_head
        self.head = new_node
        return self

    def add_to_back(self, val):
        if self.head == None:
            self.add_to_front(val)
            return self        
        new_node = DLNode(val)
        self.tail.next = new_node
        new_node.previous = self.tail
        self.tail = new_node
        return self

    def print_values(self):
        runner = self.head
        while (runner):
            print(runner.value)
            runner = runner.next
        return self


my_list = DList()