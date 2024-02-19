#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <float.h>
#include <time.h>
#include "Cb.h"

const char SEPARATOR[] = "\n\n----------------------------------\n\n\0";

void clear_screen()
{
    printf("\033[2J\033[H");
}

<<<<<<< HEAD
=======

char random_char()
{
    return 'a' + rand() % 26;
}

int random_number(int min, int max)
{
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

void showInfo(int arr[], int arrSize)
{
    for (int i = 0; i < arrSize; i++)
    {
        printf("%d\t", arr[i]);
    }
    printf("\n");
}

int* getLastAddress(int arr[], int arrSize){
    int numElem = sizeof(arrSize)/sizeof(arr[0]);
    return &(arr[numElem - 1]);
}

>>>>>>> ref
int main()
{
    clear_screen();
    printf("%d", getNum(random_number(0, 100)));
        

<<<<<<< HEAD
=======
    int size = random_number(2, 33);
    int arr[size];

    fillArray(arr, size);
    showInfo(arr, size);

    int ind = random_number(0, size);
    int arrElem = arr[size - 1];
    
    int *p = &arrElem;
    int* pArr = getLastAddress(&arrElem, size);
    int* supPA = p;
    int* supPB = pArr;
    int* supPC = supPB;

    int pointArr[] = {p, pArr, supPA, supPB, supPC};

    for (int i = 0; i < sizeof(pointArr)/sizeof(pointArr[0]); i++)
    {
        printf("pointer %d:\t%p\t%d\n",i, &pointArr[i], pointArr[i]);
    }
>>>>>>> ref

    return 0;
}