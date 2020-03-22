#/ usr/bin/env python3.8

from collections import deque

def Q():
    q = deque()
    def enqueue(val):
        nonlocal q
        q.appendleft(val)
        return True
    def dequeue():
        nonlocal q
        if len(q):
            return q.pop()
    def q_empty():
        nonlocal q
        return len(q) == 0
    return enqueue, dequeue, q_empty

def Stack():
    s = []
    def push(val):
        nonlocal s
        s.append(val)
    def pop():
        nonlocal s
        if len(s):
            return s.pop()
    return push, pop

class Node:
    def __init__(self, value=None):
        self.value = value
        self.left = None
        self.right = None

    def __repr__(self):
        left = self.left and self.left.value
        right = self.right and self.right.value
        return f'{left}<-{self.value}->{right}'
    
    def __str__(self):
        return f'({self.value})'

n = Node('A')

class Tree:
    def __init__(self, node=None):
        self.root = node
    
    def __repr__(self):
        enqueue, dequeue, q_empty = Q()
        levels = []

        node = self.root
        level = 0
        node and enqueue((node, level))

        while not q_empty(): 
            node, level = dequeue()

            # append a new level list if does not exits
            (0 <= level < len(levels)) or levels.append([])

            levels[level].append(node)

            # add left or right to queue if exists
            node.left and enqueue((node.left, level + 1))
            node.right and enqueue((node.right, level + 1))

        for_print = ''
        for level in levels:
            for_print += ' '.join([f'({repr(n)})' for n in level])
            for_print += '\n'
        return for_print

t = Tree(n)
t.root.left = Node('B')
t.root.right = Node('C')
t.root.left.left = Node('D')
t.root.left.right = Node('E')
t.root.right.left = Node('F')

print(t)
