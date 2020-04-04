#!/usr/bin/env python3

def table(n, i=0):
    print(n * i)
    if n <= i:
        return
    table(n, i+1)
    

table(12)

