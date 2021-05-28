#include <stdio.h>
#include <stdlib.h>

char *bin2str(int num, int bits);
char getShortSign(short num);

int main(int argc, char const *argv[])
{
    short num;

    num = 32767;
    printf("num: %d,sign:%c,bin:%s\n", num, getShortSign(num),bin2str(num,16));

    num = 32768;
    printf("num:%d,sign:%c,bin:%s\n", num, getShortSign(num),bin2str(num,16));

    num = -10;
    printf("num:%d   ,sign:%c,bin:%s\n", num, getShortSign(num),bin2str(num,16));

    return 0;
}


/***************** library *********************/
char getShortSign(short num)
{
    char signBit;
    union
    {
        struct
        {
            unsigned short valueBits: 15;
            unsigned char signBit: 1; // 16th bit (from right to left)
        } bits;
        short value;
    } numObject;
    numObject.value = num;
    if (numObject.bits.signBit & 1)
        signBit = '1';
    else
        signBit = '0';
    return signBit;
}

char *bin2str(int num, int bits)
{
    char *str = (char *)malloc(bits + 1);

    for (int i = bits - 1; i >= 0; i--)
    {
        if (num & 1)
        {
            *(str + i) = '1';
        }
        else
        {
            *(str + i) = '0';
        }
        num = num >> 1;
    }
    *(str + bits + 1) = '\0';
    return str;
}