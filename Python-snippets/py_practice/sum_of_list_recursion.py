#!/usr/bin/env python3

def sum(l, idx=0):
    # print(l[idx])
    if idx == len(l) - 1:
        return l[idx]
    num = sum(l, idx + 1)
    curr = l[idx]
    return num + curr



# print(sum([1, 2, 3]), end='\n\n')

def sum_slice(l):
    print(l[0])
    if len(l) is 1:
        return l[0]
    num = sum_slice(l[1:])
    curr = l[0]
    sum = curr + num
    return sum
print(sum_slice([1, 2, 3]))
