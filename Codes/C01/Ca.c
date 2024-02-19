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

int main()
{
    clear_screen();
    printf("%d", getNum(random_number(0, 100)));
        


    return 0;
}