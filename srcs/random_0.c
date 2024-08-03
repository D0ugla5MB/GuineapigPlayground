#include <stdio.h>

#define ROWS 3
#define COLS 5

void initialize_matrix(int matrix[ROWS][COLS])
{
    // Initialize the matrix with values
    int value = 1;
    for (int i = 0; i < ROWS; i++)
    {
        for (int j = 0; j < COLS; j++)
        {
            matrix[i][j] = value++;
        }
    }
}

void display_matrixAddresses(int matrix[ROWS][COLS])
{
    // Display the matrix
    for (int i = 0; i < ROWS; i++)
    {
        for (int j = 0; j < COLS; j++)
        {
            printf("%d ", &matrix[i][j]);
        }
        printf("\n");
    }
}

void display_matrixProductCartesian(int matrix[ROWS][COLS])
{
    for (int i = 1; i <= ROWS; i++)
    {
        for (int j = 1; j <= COLS; j++)
        {
            printf("%dx%d: %d  ", i, j, matrix[i - 1][j - 1]);
        }
        printf("\n");
    }
}

int findLinearPos(int ri, int ci, int rSize)
{
    return (ri - 1)*rSize + ci -1;
}

int main()
{
    int matrix[ROWS][COLS];

    initialize_matrix(matrix);
    printf("Matrix:\n");
    display_matrixProductCartesian(matrix);
    printf("\n");
    printf("\n");

    int *arrBgn = &matrix[0][0];
    int range = COLS;
    *(arrBgn + findLinearPos(1, 2, range)) = 99;

    display_matrixProductCartesian(matrix);

    /* for (int i = 0; i < ROWS * COLS; i++)
    {
        printf("%d\t%d\n", arrBgn + i, *(arrBgn + i));
    } */

    return 0;
}
/*
list of potential bugs and issues involving pointers:

Dangling Pointers:

Description: A pointer that refers to a memory location that has been deallocated or freed.
Example: Accessing memory after free(ptr).


Null Pointers:

Description: A pointer that points to NULL (or nullptr in C++) and is dereferenced.
Example: int *ptr = NULL; printf("%d", *ptr);


Uninitialized Pointers:

Description: A pointer that has not been initialized and points to a random memory location.
Example: int *ptr; printf("%d", *ptr);


Memory Leaks:

Description: Allocating memory using malloc, calloc, or realloc and failing to free it.
Example: int *ptr = malloc(sizeof(int)); // no free(ptr);


Buffer Overflows:

Description: Writing beyond the bounds of allocated memory.
Example: int *arr = malloc(10 * sizeof(int)); arr[10] = 1; // out of bounds


Buffer Underflows:

Description: Reading or writing before the start of allocated memory.
Example: int *arr = malloc(10 * sizeof(int)); arr[-1] = 1; // out of bounds


Pointer Arithmetic Errors:

Description: Incorrectly performing arithmetic on pointers, leading to invalid memory access.
Example: int arr[10]; int *ptr = arr + 10; *ptr = 1; // out of bounds


Type Mismatches:

Description: Casting pointers to incompatible types or mismatched type sizes.
Example: char *ptr = (char *)malloc(sizeof(int)); *ptr = 1; // incorrect access


Invalid Memory Access:

Description: Accessing memory that was never allocated, already freed, or is otherwise invalid.
Example: Accessing a pointer after freeing it.


Double Free:

Description: Attempting to free a pointer that has already been freed.
Example: int *ptr = malloc(sizeof(int)); free(ptr); free(ptr);


Wild Pointers:

Description: Pointers that are not initialized and thus point to unknown locations.
Example: int *ptr; // ptr is a wild pointer


Misaligned Pointers:

Description: Accessing data through a pointer that is not aligned properly according to the data type's alignment requirements.
Example: Accessing int data through a pointer that is not aligned to 4 bytes (on some architectures).


Pointer to Local Variables:

Description: Returning or using pointers to local variables that go out of scope when the function exits.
Example: int *foo() { int x; return &x; } // &x is invalid after function returns


Incorrect Use of Pointer Arithmetic:

Description: Misusing pointer arithmetic, leading to accessing unintended memory.
Example: Calculating the address of an element beyond the allocated array bounds.


Unintentional Aliasing:

Description: Accessing the same memory through different pointers with different types, leading to undefined behavior.
Example: Casting an int * to a char * and accessing the data.


Uninitialized Pointer Dereference:

Description: Dereferencing pointers that have not been initialized.
Example: int *ptr; printf("%d", *ptr);


Improper Use of Function Pointers:

Description: Using function pointers incorrectly or calling functions via incorrect function pointers.
Example: Assigning a function pointer of one type to a function of another type.
*/