
fib_seq = []
seq = [0, 1, 2, 3, 5, 8]

count = [0]

calculated_fibs = {}

def fib(nth):
    count[0] += 1
    if nth == 0: return 0
    if nth == 1: return 1

    if nth-2 in calculated_fibs:
        prev_2 = calculated_fibs[nth-2]
    else:
        prev_2 = fib(nth-2)
        calculated_fibs[nth-2] = prev_2

    if nth-1 in calculated_fibs:
        prev_1 = calculated_fibs[nth-1]
    else:
        prev_1 = fib(nth-1)
        calculated_fibs[nth-1] = prev_1

    current = prev_2 + prev_1
    # current = fib(nth-2) + fib(nth-1)
    if current not in fib_seq:
        fib_seq.append(current)
    return current

num = 30
print('fib(%d) is:' % num, fib(num))
print(fib_seq)
print('count', count)