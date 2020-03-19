#! /usr/bin/env python3.8

def const(name):
    import sys
    print(dir(sys._getframe(1).f_code))
    # print(sys._getframe(1).f_code.co_varnames)
    print(sys._getframe(1).f_code.co_nlocals)
    # caller = sys._getframe(1).f_code




# const().A = 3
# const().A = 4

def f():
    localA = 'aaa'
    # const().C = 5
    # const().A = 6
    const('added')
    A = 7
    return True

print(f())


