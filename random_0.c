#include <stdio.h>
#include <stdlib.h>

int *p(int a)
{
    int *ptr = malloc(sizeof(int));
    if (ptr != NULL)
    {
        *ptr = a;
    }
    return ptr;
}

int *pp(int *a)
{
    return a;
}

int main()
{
    int arrVar[] = {0, 0, 1};
    size_t arrSize = sizeof(arrVar) / sizeof(arrVar[0]);
    int **arrPtr = malloc(arrSize * sizeof(int *));

    for (size_t i = 0; i < arrSize; i++)
    {
        if (arrVar[i] == 1)
        {
            int *ptr = &arrVar[i];

            arrPtr[i] = ptr;
        }
        else
        {
            arrPtr[i] = &arrVar[i];
        }
    }

    for (size_t i = 0; i < arrSize; i++)
    {
        printf("Var %p in %p has %d\n", (void *)&arrPtr[i], (void *)arrPtr, *arrPtr[i]);
    }

    free(arrPtr);
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