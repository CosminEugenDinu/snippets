

class C:
    func_mes = None
    def func(self):
        C.func.pr = 'assign from func'
    #    print('hi from func')
C.func.pr = 'ceva'    

o = C()
o.func()
print(o.func.pr)
