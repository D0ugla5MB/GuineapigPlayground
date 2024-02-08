import random
import string



def rng():
    return random.randint(-100, 100)


def makeRdnStrings(size):

    return ''.join(random.choices(
        string.ascii_letters + string.digits,  k=size))


def playSlice(aux, size=-1):
    left = rng() % size
    right = rng() % size

    if (left > right):
        left = left + right
        right = left - right
        left = left - right

    return left, right, aux[left:right]

myString = makeRdnStrings(8)

print(myString)
