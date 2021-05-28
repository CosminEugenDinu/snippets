/*
Given six 10bit numbers (0-1024),
merge their bits in 64bit c8b, then unpack.

pack_4n5c -> convert 4 numbers (10bit) to 5 characters (8bit)
unpack_5c4n -> convert 5 characters (8bit) to 4 numbers (10bit) 
*/

#include <stdio.h>
#include <stdlib.h>

#define nLen 4 // 4 * 10 = 40 bit
short n10b[nLen]; // initial array with 4 numbers, each 0-1023 (10 bits)
#define cLen 5 // 5 * 8 = 40 bit
char c8b[cLen]; // converted array with 5 characters, each 0-255 (8 bits)
short unpacked_n10b[nLen]; // retrieved array from stream 

void unpack_5c4n(char c8b[5], short n10b[4]);
void pack_4n5c(short n10b[4], char c8b[5]);


char *bin(int num, int bits);
void printArr(short *arr, int len);
void printBinArrChar(char *arr, int arrLen, int bits, char sep);
void printBinArrShort(short *arr, int arrLen, int bits, char sep);
void test_4n5c4n(short *expected, short *got, char *charStream);
void testAllValues(short from, short to); // !!!!! this function tries all values !!!!

int main(int argc, char *argv[])
{
    // Do not uncomment next line, unless you can stop program execution !
    // testAllValues();
    if (argc > 1) {
        int from, to;
        sscanf(argv[1], "%d", &from);  
        sscanf(argv[2], "%d", &to);  
        printf("testing from %d to %d\n",from,to);
        testAllValues(from, to);
    }


    int i = nLen;
    short numbers_10bit[nLen] = {10, 4, 1, 13};
    while (i--)
    {
        n10b[i] = numbers_10bit[i];
    }

    printArr(n10b, nLen);

    pack_4n5c(n10b, c8b);

    printBinArrShort(n10b, nLen, 10, ' ');
    printBinArrChar(c8b, cLen, 8, ' ');
    printBinArrShort(n10b, nLen, 10, 0);
    printBinArrChar(c8b, cLen, 8, 0);

    unpack_5c4n(c8b, unpacked_n10b);

    printArr(unpacked_n10b, nLen);
    printBinArrShort(unpacked_n10b, nLen, 10, ' ');

    return 0;
}

/***************** library ****************************/

char *bin(int num, int bits)
{
    char *str = (char *)malloc(bits + 1);

    int i;
    for (i = bits - 1; i >= 0; i--)
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

void printArr(short *arr, int arrLen)
{
    printf("[ ");
    while (arrLen--)
    {
        printf("%d ", *arr++);
    }
    printf("]\n");
}
void printBinArrShort(short *arr, int arrLen, int bits, char sep)
{
    while (arrLen--)
    {
        printf("%s%c", bin(*arr++, bits), sep);
    }
    printf("\n");
}
void printBinArrChar(char *arr, int arrLen, int bits, char sep)
{
    while (arrLen--)
    {
        printf("%s%c", bin(*arr++, bits), sep);
    }
    printf("\n");
}

void unpack_5c4n(char c8b[5], short n10b[4])
{

    n10b[0] = ((c8b[0] & 0xff) << 2) | (c8b[1] >> 6) & 0x3;
    n10b[1] = ((c8b[1] & 0x3f) << 4) | (c8b[2] >> 4) & 0xf;
    n10b[2] = ((c8b[2] & 0xf) << 6) | (c8b[3] >> 2) & 0x3f;
    n10b[3] = ((c8b[3] & 0x3) << 8) | c8b[4] & 0xff;

    // change from signed to unsigned numbers
    for (int i = 0; i < 4; i++)
    {
        n10b[i] = (n10b[i] < 0) ? 1024 + n10b[i] : n10b[i];
    }
}

void pack_4n5c(short n10b[4], char c8b[5])
{
    c8b[0] = n10b[0] >> 2;
    c8b[1] = (n10b[0] << 6) | (n10b[1] >> 4);
    c8b[2] = (n10b[1] << 4) | (n10b[2] >> 6);
    c8b[3] = (n10b[2] << 2) | (n10b[3] >> 8);
    c8b[4] = n10b[3];

    // change from signed to unsigned numbers
    for (int i = 0; i < 4; i++)
    {
        c8b[i] = (c8b[i] < 0) ? 256 + c8b[i] : c8b[i];
    }
}

void test_4n5c4n(short *expected, short *got, char *charStream)
{
    int iter = nLen;
    while (iter--)
    {
        if (expected[iter] != got[iter])
        {
            printf("Test failed!\n");
            printf("Expected:\t");
            printArr(expected, nLen);
            printf("got:\t\t");
            printArr(got, nLen);
            printBinArrShort(expected, nLen, 10,' ');
            printBinArrChar(charStream, cLen, 8, ' ');
            printBinArrShort(got, nLen, 10,' ');
            printf("\n");
            exit(1);
        }
    }
}

void testAllValues(short from, short to)
{
    const int max10b = 1023;
    short test10b[nLen] = {0, 0, 0, 0};
    for (int i = from; i <= to; i++)
    {
        printf("%d\n", i);
        for (int j = 0; j <= max10b; j++)
        {
            for (int k = 0; k <= max10b; k++)
            {
                for (int l = 0; l <= max10b; l++)
                {
                    test10b[0] = i;
                    test10b[1] = j;
                    test10b[2] = k;
                    test10b[3] = l;
                    pack_4n5c(test10b, c8b);
                    unpack_5c4n(c8b, unpacked_n10b);
                    test_4n5c4n(test10b, unpacked_n10b, c8b);
                }
            }
        }
    }
}
/************ library END *******************/
