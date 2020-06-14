#! /usr/bin/env python3.8

class Trie:

    class Node:
        def __init__(self):
            self.children = {}
            self.is_word = False
    
    def __init__(self):
        self.root = self.Node()

    def insert(self, word):
        node = self.root
        for ch in word:
            next = node.children.get(ch)
            if next:
                node = next
            else:
                node.children[ch] = self.Node()
                node = node.children[ch]
        node.is_word = True

    def search(self, word):
        node = self.root
        for ch in word:
            if ch in node.children:
                print("found", ch)
                node = node.children[ch]
            else:
                return False
        return node.is_word

T = Trie()
T.insert("ceva")
T.insert("ce")
print(T.search("c"))