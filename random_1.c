#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int data;
    struct Node *nextNode;
} LinkedList;

void showList(LinkedList *list)
{
    while (list != NULL)
    {
        printf("%d\t", list->data);
        list = list->nextNode;
    }
    printf("NULL");
    printf("\nFIM\n\n");
}

int fillList(LinkedList *list, int headValue, int limit)
{
    list->data = headValue;
    while (list->data < limit)
    {
        list->nextNode = (LinkedList *)malloc(sizeof(LinkedList));
        list->nextNode->data = list->data + 1;
        list = list->nextNode;
    }
    list->nextNode = NULL;

    return 1;
}

LinkedList *reverseList(LinkedList *head)
{
    /*  LinkedList *prev = NULL;
     LinkedList *current = head;
     LinkedList *next = NULL;

     while (current != NULL)
     {
         next = current->nextNode;
         current->nextNode = prev;
         prev = current;
         current = next;
     }
     return prev; */

    LinkedList *next = NULL;
    LinkedList *prev = NULL;

    while (head != NULL)
    {
        next = head->nextNode;
        head->nextNode = prev;
        prev = head;
        head = next;
    }
    return prev;
}
void rmListNode(LinkedList *head, int nodeData)
{
    while (head->nextNode->data != nodeData || !head->nextNode)
    {
        head = head->nextNode;
    }
    LinkedList *auxPtr = head->nextNode;
    head->nextNode = head->nextNode->nextNode;
    printf("deleted node's data:\t%p\t%d\n", auxPtr, auxPtr->data);
    free(auxPtr);
}

LinkedList *findNodeLoop(LinkedList *list, int dataTarget)
{
    while (list->data != dataTarget)
    {
        list = list->nextNode;
    }

    return list;
}

LinkedList *getNode(LinkedList *list, int dataTarget)
{
    if (list == NULL)
    {
        printf("\nNode was not found\n");
        return NULL;
    }
    if (list->data == dataTarget)
    {
        printf("\nNode was found\n");
        return list;
    }
    if (!list->nextNode)
    {
        printf("\nNode was not found it\n");
        return list;
    }

    return getNode(list->nextNode, dataTarget);
}
LinkedList *findNodeTailRec(LinkedList *list, int dataTarget)
{
    return getNode(list, dataTarget);
}
void changeNodePos(LinkedList **head, int a, int b)
{
    if (a == b)
    {
        return;
    }

    LinkedList **node1Prev = NULL, **node2Prev = NULL;
    LinkedList **current = head;

    while (*current)
    {
        if ((*current)->data == a)
        {
            node1Prev = current;
        }
        else if ((*current)->data == b)
        {
            node2Prev = current;
        }
        current = &((*current)->nextNode);
    }

    if (node1Prev && node2Prev)
    {
        LinkedList *node1 = *node1Prev;
        LinkedList *node2 = *node2Prev;

        LinkedList *temp = node2->nextNode;
        *node2Prev = node1;
        node2->nextNode = node1->nextNode;

        *node1Prev = node2;
        node1->nextNode = temp;
    }
}

void clearList(LinkedList *list)
{
    if (list->nextNode)
    {
        LinkedList *ptrAux = list;
        while (ptrAux != NULL)
        {
            LinkedList *temp = ptrAux;
            ptrAux = ptrAux->nextNode;
            free(temp);
        }

        ptrAux = NULL;
        printf("list(s) cleared\n");
    }
    else
    {
        printf("list(s) was empty\n");
    }
}

int main()
{

    return 0;
}