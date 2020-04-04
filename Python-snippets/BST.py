# Binary Search Tree

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BST:
    
    def __init__(self, root_val):
        self.root = Node(root_val) 
    
    def print_tree(self):
        space = []
        def _print_tree(node):
            if node:
                nonlocal space
                row = [node.left.val, node.right.val]
                space += [row]
                _print_tree
        _print_tree(self.root)
        print(space) 
        
    def search(self, val):
        def _search(node, val):
            if node == None or node.val == val:
                return node 
            if node.val < val:
                return _search(node.right, val)
            return _search(node.left, val)
        return _search(self.root, val)
    
    def insert(self, val):
        
        def _insert(node, val):
            if node == None:
                node = Node(val)
            if node.val < val:
                if node.right is None:
                    node.right = Node(val)
                else:
                    _insert(node.right, val)
            else:
                if node.left is None:
                    node.left = Node(val)
                else:
                    _insert(node.left, val)


# test

tree = BST(10)
tree.root.left = Node(4)
tree.root.right = Node(12)
tree.insert(3)
tree.insert(15)
tree.insert(20)
tree.insert(5)
tree.print_tree()
