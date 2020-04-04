def outer():
    outer_var = 3
    def rec_f():
        nonlocal outer_var
        outer_var -=1
        return outer_var
    rec_f()
    print('outer_var', outer_var)

outer()
