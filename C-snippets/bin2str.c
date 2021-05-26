#include <stdio.h>
#include <stdlib.h>

#define maxToFree 1
int counterToFree = maxToFree;
void *pointersToFree[maxToFree];
void freeMemory();

char *bin2str(int num, int bits)
{
    char *str = (char *)malloc(bits + 1);
    pointersToFree[0] = str;

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

int main()
{
    const int n = 10;
    printf("n: %s\n", bin2str(n, 16));
    freeMemory();
    return 0;
}

/********* lib ****************/
void addToFree(void *pointerToFree)
{
    pointersToFree[counterToFree] = pointerToFree;
    counterToFree--;
}
void freeMemory()
{
    int iter = maxToFree;
    while (--iter)
    {
        free(pointersToFree[iter]);
    }
}
/********* lib END ****************/