#!/usr/bin/env python3

def recursive_list_sum(data):
    total = 0
    for item in data:
        if type(item) == list:
            total += recursive_list_sum(item)
        elif type(item) == int:
            total += item
    return total






print(f'espected rezult: {21}')
print(recursive_list_sum([1, 2, [3,4], [5,6]]))