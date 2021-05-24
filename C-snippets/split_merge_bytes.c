/*
Split short in two bytes (char) than merge.

1. num  : 1000011011100111 = ffff86e7 = -31001
2. byte1: 10000110-------- = 0xffff86e7 >> 8
   16bit: 0000000011111111 = 0xff
3. byte2: --------11100111 = 0xffff86e7 & 0xff
4. merge: 1000011011100111
*/

#include <stdio.h>

void bin(char bitStr[], short num, char bits);
int main(int argc, char const *argv[])
{
    char bit_16_str[] = "0000000000000000";
    char bit_8_str[] = "00000000";

    short num = -31001;
    bin(bit_16_str, num, 16);
    printf("num  : %s = %x = %d\n", bit_16_str, num, num);

    unsigned char shiftR8 = 8;
    unsigned char byte1 = num >> shiftR8;
    bin(bit_8_str, byte1, 8);
    printf("byte1: %s-------- = 0x%x >> %d\n", bit_8_str, num, shiftR8);

    // bin(bit255) -> '0000000011111111' 
    unsigned short bit255 = 0xff;
    bin(bit_16_str, bit255, 16);
    printf("16bit: %s = 0x%x\n", bit_16_str, bit255);

    unsigned char byte2 = num & bit255;
    bin(bit_8_str, byte2, 8);
    printf("byte2: --------%s = 0x%x & 0x%x\n", bit_8_str, num, bit255);

    short merged = (byte1 << 8) | byte2; 
    bin(bit_16_str, merged, 16);
    printf("merge: %s\n", bit_16_str);
    
    return 0;
}

void bin(char bitStr[], short num, char bits)
{
    short i = 0;
    unsigned short j;
    for (j = 1 << (bits - 1); j > 0; j = j / 2)
    {
        if (num & j)
        {
            bitStr[i] = '1';
        }
        else
        {
            bitStr[i] = '0';
        }
        i++;
    }
    bitStr[i] = '\0';
}
