import { faker } from '@faker-js/faker';
import * as fs from "node:fs/promises";
import path from 'node:path';


export function makeRdnPersonData() {
    const gender = faker.person.gender();
    const sex = faker.person.sex();
    const firstName = faker.person.firstName(
        () => {
            if (gender.toLocaleLowerCase().includes("fe")) {
                return "female";
            }
            if (gender.toLocaleLowerCase().includes("ma")) {
                return "male";
            }
            return "other";
        }
    ).toUpperCase();
    const lastName = faker.person.lastName().toUpperCase();
    const age = faker.number.int({ min: 1, max: 100 });
    const country = faker.location.country();

    const formatData = () => {
        return `\t\t\tname: ${firstName}\tlastname: ${lastName}
                \t\tcountry: ${country}\tage: ${age}
                \t\tsex: ${sex}\tgender: ${gender}\n\n
                `
    };
    return formatData();
}

export async function putDataOnFile(file, data) {
    try {
        await fs.appendFile(file, data);
    } catch (error) {
        console.log(error);
    }
}