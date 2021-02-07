#!/usr/bin/env python3

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