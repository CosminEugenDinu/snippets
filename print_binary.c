/*
Print a string binary representation of a number.
*/

#include <stdio.h>

void bin(char bitStr[], short num, char bits)
{
    for (short i = bits - 1; i >= 0; i--)
    {
        if (num & 1)
        {
            bitStr[i] = '1';
        }
        else
        {
            bitStr[i] = '0';
        }
        num = num >> 1;
    }
}

int main()
{
    char bit_8_str[] = "00000000";
    short num = 222;
    bin(bit_8_str, num, 8);
    printf("%s\n", bit_8_str);
    return 0;
}
