import os
from people import createPeople

def clearTerminal():
    os.system("cls" if os.name == "nt" else "clear")

def run():
    if __name__ == "__people__":
        numPerson = 10
        people = createPeople(numPerson)
        for i, person in enumerate(people, start=1):
            print(f"Person {i}:")
            print(person)
            print()
            
clearTerminal()       
run()