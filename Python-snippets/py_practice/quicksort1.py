#!/usr/bin/env python3.8

# wikipedia
# backtobackswe youtube channel

def quicksort(arr, lo, hi):

    # base case: arr with one elem
    if lo >= hi:
        return 
    
    piv_i = partition(arr, lo, hi)

    quicksort(arr, lo, piv_i-1)
    quicksort(arr, piv_i+1, hi)


def partition(arr, lo, hi):

    # chose pivot as last element
    pivot = arr[hi]
    
    # i - index next to last element less than pivot
    i = lo

    # j - index to scan array up till elem before pivot (last index)
    j = lo

    while (j < hi):
        if arr[j] <= pivot:
            # move elem at j to the left
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
        j += 1
    
    # now all elements less than pivot are on the left and
    # i is at the next position after them

    # swap pivot with the element at i:
    arr[hi], arr[i] = arr[i], arr[hi]

    # return new index of pivot
    return i


arr = [1, 3, 5, 4, 2, 6]
arr = [1, 2, 1, 0, 3]
quicksort(arr, 0, len(arr)-1)
print(arr)