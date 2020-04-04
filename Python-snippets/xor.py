# xor
import dis

ar = [1, 1, 3, 2, 2, 3, 7, 4]
def x ():
    v = 0
    a = []
    b = []
    c = []
    _ar = []
    print(ar, 'ar')
    print(v)
    for i in ar:
        a += [v]
        # v = 0
        b += [v]
        _ar += [i]
        v = v ^ i
        c += [v]
    # print(_ar, 'ar[i]')
    # print(b)
    print(a)
    print(ar, 'ar')
    print(c)
    print(v)
    return v

x()

# print(dis.dis(x))