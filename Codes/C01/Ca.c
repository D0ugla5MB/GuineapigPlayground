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

int getArrSize(int arr[])
{
    return sizeof(arr) / sizeof(int);
}

// int arrSize = sizeof(arr) / sizeof(int); // dont work witch: parameters, poiters, matrix
int main(int argc, char const *argv[])
{
    clear_screen();
    srand(time(NULL));
    put_space();

    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
    int arrA[100];
    fillArray(arrA, 100);
    int *p = arrA;

    printf("%p\t%p\n", p, p + 1);
    printf("%p\t%p\n", &arrA[0], &arrA[0] + 8);

    return 0;
}
