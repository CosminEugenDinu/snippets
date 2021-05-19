#!/usr/bin/env python3

def digit_str(num, max_digits):
    digits = [0 for _ in range(max_digits)] 

    digit = 0
    k_digit = max_digits
    while k_digit:
        exp = max_digits-k_digit+1  
        base = 10
        pow = 1
        while exp:
            pow *= base 
            exp -= 1
        digit = (num % pow - digit)//(pow//10)
        digits[k_digit-1] = digit 

        k_digit -= 1

    return ''.join(str(d) for d in digits) 

print(digit_str(123, 4))