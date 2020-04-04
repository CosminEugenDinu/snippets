#!/usr/bin/env python3

def raise_at(a, b):
    print(a, b)
    if b == 0:
        return 1
    rez = a * raise_at(a, b - 1)
    return rez

print(raise_at(2, 3))