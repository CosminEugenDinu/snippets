cycle = lambda max=3: lambda idx: (idx + 1) % max

get_next = cycle()
assert get_next(0) == 1
assert get_next(1) == 2
assert get_next(2) == 0
assert get_next(3) == 1
assert get_next(4) == 2
assert get_next(5) == 0
