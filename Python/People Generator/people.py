from faker import Faker
import random


personData = Faker()


def makePerson():
    firstName = personData.first_name()
    lastName = personData.last_name()
    fullName = f"{firstName} {lastName}"
    age = random.randint(0, 99)
    sex = random.choice(['Male', 'Female'])
    country = personData.country()
    state = personData.state()
    city = personData.city()

    person = {
        "first_name": firstName,
        "last_name": lastName,
        "full_name": fullName,
        "age": age,
        "sex": sex,
        "country": country,
        "state": state,
        "city": city
    }
    return person


def createPeople(num):
    people = []
    for _ in range(num):
        person = makePerson()
        people.append(person)
    return people
