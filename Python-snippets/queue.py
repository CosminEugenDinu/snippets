class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None

class Q:
    
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

    def enq(self, val):
        new_node = Node(val)

        if self.length == 0:
            self.head = new_node
            self.tail = new_node
            self.length += 1
            return

        new_node.next = self.head
        self.head.prev = new_node
        self.head = new_node
        self.length += 1
        return

    def deq(self):
        if self.length == 0:
            return
        if self.length == 1:
            tail = self.tail
            self.head = None
            self.tail = None
            self.length -= 1
            return tail.value
        tail = self.tail
        tail_prev = self.tail.prev
        tail_prev.next = None
        self.tail = tail_prev
        self.length -= 1
        return tail.value
    
    def __repr__(self):
        l_list = []
        node = self.head
        while node:
            l_list.append(node.value)
            node = node.next

        return 'head_IN >>>' + str(l_list) + '>>> tail_OUT'
q = Q()
q.enq(1)
q.enq(2)
q.enq(3)
print(q.deq())
print(q.deq())
print(q.deq())
print(q.deq())
print(q.deq())
print(q)
        
        



