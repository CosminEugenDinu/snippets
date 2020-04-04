# trying to get func name from inside that funcion

def f():
    import sys
    import inspect
    count_x = 0
    count_y = 0
    for x in range(0, len(inspect.stack())): 
        print(f'count_x is {count_x}')
        print(inspect.stack()[x]) 
        count_x += 1
        for y in range(0, len(inspect.stack()[x])): 
            print(f'count_y is {count_y}')
            print(inspect.stack()[x][y])
            count_y += 1

            print(y)
    

    print('=============')
    print(dir(inspect.stack()))
    print('==============')
    print(inspect.stack()[0][3])
    print('=============')
    


def randomFunc():
    pass

caller = f()
print(f)
