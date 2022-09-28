class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None

class SList:
    def __init__(self):
        self.head = None

    def add_to_front(self, val):
        new_node = SLNode(val)
        current_head = self.head
        new_node.next = current_head
        self.head = new_node
        return self

    def print_values(self):
        runner = self.head
        while (runner):
            print(runner.value)
            runner = runner.next
        return self

    def add_to_back(self, val):
        if self.head == None:
            self.add_to_front(val)
            return self        
        new_node = SLNode(val)
        runner = self.head
        while (runner.next != None):
            runner = runner.next
        runner.next = new_node
        return self

    def remove_from_front(self):
        runner = self.head
        runner_next = runner.next
        self.head = runner_next
        return runner

    def remove_from_middle(self, val):
        runner = self.head
        prev = self.head
        for nodes in range(1, val+1):
            prev = runner
            runner = runner.next.next
        return_value = prev.next
        prev.next = runner
        return return_value
    
    def remove_from_end(self):
        runner = self.head
        prev = self.head
        while (runner.next):
            prev = runner
            runner = runner.next
        return_value = prev.next
        prev.next = None
        return return_value


my_list = SList()
my_list.add_to_front("are").add_to_front("linked lists").add_to_back("fun").print_values()
print(my_list.remove_from_front())
my_list.remove_from_middle(1)
my_list.remove_from_end()
my_list.print_values()
