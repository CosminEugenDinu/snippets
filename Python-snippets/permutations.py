#!/usr/bin/env python3

def permute(bag, perm):
    if len(perm) == len(bag):
        print(perm)
        return
    for el in bag:
        if el not in perm:
            perm.append(el)
            permute(bag, perm)
            perm.pop()

permute('abcd',[])

def generate_permutations(perm, n, counter):
    counter[0] += 1
    print(f"f{counter[0]} called with {perm}")
    if len(perm) == n:
        print(perm)
        print(f"f{counter[0]} returned len(perm)==n")
        counter[0] -= 1
        return

    for k in range(n):
        if k not in perm:
            print(f"f{counter[0]} append {k}")
            perm.append(k)
            generate_permutations(perm, n, counter)
            perm.pop()
            print(f"f{counter[0]} popped", perm)
    
    print(f"f{counter[0]} returned after for if ...")
    counter[0] -=1

generate_permutations(perm=[], n=4, counter=[0])


def permute(bag, permutation):
    # When tha bag is empty, a full permutation exists
    if len(bag) == 0:
        print(''.join(permutation))
    else:
        # For each element left in the bag
        for k in range(len(bag)):
            # Take the element out of the bag and put it at the end
            # of the permutation
            permutation.append(bag.pop(k))

            # Permute the rest of the bag (recursively)
            permute(bag, permutation)

            # Take the element off the permutation and put it
            # back in the bag
            bag.insert(k, permutation.pop())

permute(list('catdog'), [])


# **********************************************
def permutations(string):
    bag = list(string)
    perm = []
    all_perms = set()
    permute(bag, perm, all_perms)
    return sorted(all_perms)

def permute(bag, perm, all_perms):
    if len(bag) == len(perm):
        elems = [bag[i] for i in perm]
        all_perms.add(''.join(elems))
        return
    for i, elem in enumerate(bag):
        if i not in perm:
            perm.append(i)
            permute(bag, perm, all_perms)
            perm.pop()



permutations('a'); # ['a']
permutations('ab'); # ['ab', 'ba']
permutations('aabb'); # ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

# **********************************************

# ***********************************************
# Generating permutation using Heap Algorithm 
def heapPermutation(a, size, n): 
      
    # if size becomes 1 then prints the obtained 
    # permutation 
    if (size == 1): 
        print(a) 
        return
  
    for i in range(size): 
        heapPermutation(a,size-1,n); 
  
        # if size is odd, swap first and last 
        # element 
        # else If size is even, swap ith and last element 
        if size&1: 
            a[0], a[size-1] = a[size-1],a[0] 
        else: 
            a[i], a[size-1] = a[size-1],a[i] 
          
  
a = [1, 2, 3] 
n = len(a) 
heapPermutation(a, n, n) 
# ***********************************************

