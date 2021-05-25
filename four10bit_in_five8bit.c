/*
Given six 10bit numbers (0-1024),
merge their bits in 64bit buffer, then unpack.
*/

#include <stdio.h>

void bin(char bitStr[], short num, char bits);

// six 10 bit numbers
unsigned short num_bit10[4] = {1023, 1022, 1021, 1020};

// 5 * 8 = 40 bit buffer
#define b_len 5
unsigned char buffer[b_len] = {0};

int main()
{
    char bit_16_str[] = "0000000000000000";
    char bit_8_str[] = "00000000";

    buffer[0] = num_bit10[0] >> 2;
    buffer[1] = (num_bit10[0] << 6) | (num_bit10[1] >> 4);
    buffer[2] = (num_bit10[1] << 4) | (num_bit10[2] >> 6);
    buffer[3] = (num_bit10[2] << 2) | (num_bit10[3] >> 8);
    buffer[4] = num_bit10[3] & 0xff;

    bin(bit_8_str, buffer[0], 8);
    printf("%s", bit_8_str);
    bin(bit_8_str, buffer[1], 8);
    printf("%s", bit_8_str);
    bin(bit_8_str, buffer[2], 8);
    printf("%s", bit_8_str);
    bin(bit_8_str, buffer[3], 8);
    printf("%s", bit_8_str);
    bin(bit_8_str, buffer[4], 8);
    printf("%s\n", bit_8_str);
    
    unsigned short num[4] = {0};
    num[0] = (buffer[0] << 2) | (buffer[1] >> 6);
    num[1] = ((buffer[1] & 0x3f) << 4) | (buffer[2] >> 4);
    num[2] = ((buffer[2] & 0xf) << 6) | (buffer[3] >> 2);
    num[3] = ((buffer[3] & 0x3) << 8) | buffer[4];

    bin(bit_16_str, num[0], 16);
    printf("%s, %d\n", bit_16_str, num[0]);
    bin(bit_16_str, num[1], 16);
    printf("%s, %d\n", bit_16_str, num[1]);
    bin(bit_16_str, num[2], 16);
    printf("%s, %d\n", bit_16_str, num[2]);
    bin(bit_16_str, num[3], 16);
    printf("%s, %d\n", bit_16_str, num[3]);

    return 0;
}

void bin(char bitStr[], short num, char bits)
/*
Print a string binary representation of a number.
*/
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