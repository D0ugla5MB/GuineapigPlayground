import { faker } from '@faker-js/faker';

export function getRandomData() { return makeRdnData(); }

function makeRdnData() {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    return { randomName, randomEmail };
}