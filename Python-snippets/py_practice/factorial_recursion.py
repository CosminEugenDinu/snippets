#!/usr/bin/env python3

def factorial(n):
    print(n)
    if n <= 0:
        return 1
    num = factorial(n-1)
    curr = n
    fact = num * curr
    return fact




assert factorial(4) == 4*3*2*1
# factorial(4)