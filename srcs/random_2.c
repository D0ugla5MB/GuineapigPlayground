#include <stdlib.h>
#include <stdio.h>
#include <time.h>

char* getStr(int size){
    char *str = malloc(size + 1);

    for (int i = 0; i < size; i++)
    {
        int num = rand() % 62; 

        if (num < 26)
        {
            str[i] = 'a' + num;
        }
        else if (num < 52)
        {
            str[i] = 'A' + (num - 26);
        }
        else
        {
            str[i] = '0' + (num - 52);
        }
    }

    str[size] = '\0';
    return str;
} 

int main(){
    srand(time(NULL));

    FILE *f = fopen("test.txt", "w");
    char * txt = getStr(8);
    fprintf(f, "%s\t", txt); 
    fclose(f);  
    free(txt);


    return 0;
}