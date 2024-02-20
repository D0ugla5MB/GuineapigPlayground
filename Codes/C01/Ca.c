#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MY_SIZEOF(arr) ((char *)(&arr + 1) - (char *)(&arr))

void clear_screen()
{
    printf("\033[2J\033[H");
}

char random_char()
{
    return 'a' + rand() % 26;
}

int random_number(int min, int max)
{
    // srand(time(NULL)); the output will be the same IF the calls would happen in the same second
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

void fillArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        arr[i] = i;
    }
}

// int arrSize = sizeof(arr) / sizeof(int); // dont work witch: parameters, poiters, matrix

struct Pointer
{
    int arrNum[10];
    int elem;
    int *pointElem;
};

int main(int argc, char const *argv[])
{
    clear_screen();
    srand(time(NULL));

    int (*p)(int, int) = &random_number;
    int cnt = 5;
    for (int i = cnt; i > 0; i--)
    {
        printf("%p\t%d\n", (*p), (*p)(0, 10));
    }

    return 0;
}
