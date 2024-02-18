#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <float.h>
#include <time.h>

const char SEPARATOR[] = "\n\n----------------------------------\n\n\0";

void clear_screen()
{
    printf("\033[2J\033[H");
}

void dataTypesC()
{
    printf("Size of char: %zu byte(s)\n", sizeof(char));
    printf("Minimum value of char: %d\n", CHAR_MIN);
    printf("Maximum value of char: %d\n", CHAR_MAX);
    printf("%s", SEPARATOR);

    printf("Size of unsigned char: %zu byte(s)\n", sizeof(unsigned char));
    printf("Maximum value of unsigned char: %u\n", UCHAR_MAX);
    printf("%s", SEPARATOR);

    printf("Size of short: %zu byte(s)\n", sizeof(short));
    printf("Minimum value of short: %d\n", SHRT_MIN);
    printf("Maximum value of short: %d\n", SHRT_MAX);
    printf("%s", SEPARATOR);

    printf("Size of unsigned short: %zu byte(s)\n", sizeof(unsigned short));
    printf("Maximum value of unsigned short: %u\n", USHRT_MAX);
    printf("%s", SEPARATOR);

    printf("Size of int: %zu byte(s)\n", sizeof(int));
    printf("Minimum value of int: %d\n", INT_MIN);
    printf("Maximum value of int: %d\n", INT_MAX);
    printf("%s", SEPARATOR);

    printf("Size of unsigned int: %zu byte(s)\n", sizeof(unsigned int));
    printf("Maximum value of unsigned int: %u\n", UINT_MAX);
    printf("%s", SEPARATOR);

    printf("Size of long: %zu byte(s)\n", sizeof(long));
    printf("Minimum value of long: %ld\n", LONG_MIN);
    printf("Maximum value of long: %ld\n", LONG_MAX);
    printf("%s", SEPARATOR);

    printf("Size of unsigned long: %zu byte(s)\n", sizeof(unsigned long));
    printf("Maximum value of unsigned long: %lu\n", ULONG_MAX);
    printf("%s", SEPARATOR);

    printf("Size of long long: %zu byte(s)\n", sizeof(long long));
    printf("Minimum value of long long: %lld\n", LLONG_MIN);
    printf("Maximum value of long long: %lld\n", LLONG_MAX);
    printf("%s", SEPARATOR);

    printf("Size of unsigned long long: %zu byte(s)\n", sizeof(unsigned long long));
    printf("Maximum value of unsigned long long: %llu\n", ULLONG_MAX);
    printf("%s", SEPARATOR);

    printf("Size of float: %zu byte(s)\n", sizeof(float));
    printf("Minimum value of float: %.10e\n", FLT_MIN);
    printf("Maximum value of float: %.10e\n", FLT_MAX);
    printf("%s", SEPARATOR);

    printf("Size of double: %zu byte(s)\n", sizeof(double));
    printf("Minimum value of double: %.10e\n", DBL_MIN);
    printf("Maximum value of double: %.10e\n", DBL_MAX);
    printf("%s", SEPARATOR);

    printf("Size of long double: %zu byte(s)\n", sizeof(long double));
    printf("Minimum value of long double: %.10Le\n", LDBL_MIN);
    printf("Maximum value of long double: %.10Le\n", LDBL_MAX);
    printf("%s", SEPARATOR);
}

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

void showArray(int arr[], int arrSize)
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

int main()
{
    clear_screen();
    srand(time(NULL));

    int size = random_number(2, 33);
    int arr[size];

    fillArray(arr, size);
    showArray(arr, size);

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

    return 0;
}