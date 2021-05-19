
#include <stdio.h>

int n = 123;

void numToStr(char* digits, int num, int len);

int main(){
    int len = 4;
    char digits[len];
    numToStr(digits, n, len);
    printf("%s", digits);
}


void numToStr(char* digits, int num, int len) {
    int digit = 0;
    int k_digit = len;
    digits[len] = '\0'; // stream terminator character
    while (k_digit) {
        int exp = len - k_digit + 1;
        int base = 10;
        int pow = 1;
        while (exp) {
            pow *= base;
            exp -= 1;
        }
        digit = (num % pow - digit) / (pow / 10);
        digits[k_digit-1] = digit + 48; // ascii

        k_digit -= 1;
    }
}