#include <stdio.h>
#include <stdlib.h>

#define ARR_SIZE 10

char random_char()
{
    return 'a' + rand() % 26;
}

void makeRdnStr(char *str, int index)
{
    for (int i = 0; i < ARR_SIZE - 1; i++)
    {
        str[i] = 'a' + rand() % 26; 
    }
    str[ARR_SIZE - 1] = '\0'; 
}



int main(int argc, char const *argv[])
{
    char *strings[ARR_SIZE];
    void (*pointerA)(char *, int);

    pointerA = &makeRdnStr;

    for (int i = 0; i < ARR_SIZE; i++)
    {
        printf("%d:\020%s\n", i, *strings[i]);
        free(strings[i]);
    }
    return 0;
}
