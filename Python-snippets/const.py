#! /usr/bin/env python3.8

# print(dir(type.__class__))

class Const:
    def __setattr__(self, name, value):
        if hasattr(self, name):
            raise TypeError("Assignment to constant.") 
        else:
            self.__dict__[name] = value


const = Const()
const.A = 3

def f():
    const.B = 4
    return const.A 

const.A = 3


print(f())


