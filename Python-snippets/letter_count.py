def letterRange(start, stop):
    alfabet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    base = len(alfabet)
    num_chars = alfabet[0]
    while start < stop:
        n = start
        while n > 0:
            unit = n % base
            num_chars += alfabet[unit]
            n = (n-unit) // base 
        yield num_chars[::-1]
        num_chars = ""
        start += 1

excell_formula = '=IF(ISBLANK(Note!$%(char)s$%(row)s),"",Note!$%(char)s$%(row)s)'
row = 28 
for char_num in letterRange(10, 100):
    if char_num.find("0") == -1:
        print(excell_formula % {
            "char": char_num,
            "row": row 
        })