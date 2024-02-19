#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "Cb.h"

char random_char()
{
    return 'a' + rand() % 26;
}

int random_number(int min, int max)
{
    srand(time(NULL));
    return min + rand() % (max - min + 1);
}

int getTotalNumBits(int size)
{
    return 8 * size;
}

void getPointerInfo(int *a)
{
    printf("pointer a: %p\t%d\n\n", &a, *a);
}

int getNum(int num)
{
    return num;
}

void fillArray(int arr[], int arrSize)
{
    // int size = sizeof(arr)/sizeof(arr[0]);

    for (int i = 0; i < arrSize; i++)
    {
        arr[i] = random_number(-10000, 10000);
    }
}

void showArray(int arr[], int arrSize)
{
    for (int i = 0; i < arrSize; i++)
    {
        printf("%d\t", arr[i]);
    }
    printf("\n");
}

int *getLastAddress(int arr[], int arrSize)
{
    int numElem = sizeof(arrSize) / sizeof(arr[0]);
    return &(arr[numElem - 1]);
}