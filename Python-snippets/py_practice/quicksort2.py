#!/usr/bin/env python3.8

# udacity

# the idea is to move the pivot from right to left
# till its write position:
# when a scanned element from left is > than pivot,
# make room in front of pivot by swapping elem in front of
# pivot with scanned elem, move pivot one position left ...

def quicksort(arr, lo, hi):
    if hi <= lo:
        return
    
    piv_i = partition(arr, lo, hi)
    quicksort(arr, lo, piv_i-1)
    quicksort(arr, piv_i+1, hi)


def partition(arr, lo, hi):

    # choose pivot as last element
    pivot = arr[hi]
    piv_i = hi

    # begin to scan array from left

    while (lo <= piv_i):

        # scan array from left
        if arr[lo] <= pivot:
            lo += 1
            continue
        
        # if an elem is found grater than pivot
        # move it after the pivot
        item = arr[lo]
        arr[lo], arr[piv_i-1] = arr[piv_i-1], arr[lo]
        arr[piv_i-1] = pivot
        arr[piv_i] = item
        piv_i -= 1
    
    return piv_i


arr = [2, 3, 1, 0, 5, 4]
arr = [0, 1000, 0]
quicksort(arr, 0, len(arr)-1)
print(arr)

