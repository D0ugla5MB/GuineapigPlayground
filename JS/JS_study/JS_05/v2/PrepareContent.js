import { doRNG } from "./MyUtils.js";

const numberRequestData = doRNG(0, 30);
const dataSrc = `https://catfact.ninja/breeds?limit=${numberRequestData}`;

async function getData(data) {
    try {
        const okData = await fetch(data);
        if (!okData.ok) {
            throw Error("Failed to fetch data");
        }
        return await okData.json();
    } catch (error) {
        console.error(error);
    }
}

async function prepareFetchedData(fetchedData, propName) {
    try {
        if (fetchedData !== undefined && fetchedData.data) {
            const tupleList = [];


            let tuple = {
                breedName: fetchedData.data[index]["breed"],
                property: propName,
                propValue: fetchedData.data[index][`${propName}`]
            }
            tupleList.push(tuple);

            return tupleList;
        }
        throw Error("Empty or undefined data");
    } catch (error) {
        console.error(error);
    }
}

async function showData(data) {
    const dataListSize = data.length;

    for (let index = 0; index < dataListSize - 1; index++) {
        console.log(`Breed:\t${data[index].breedName}\n${data[index].property}:\t${data[index].propValue}\n`);

        console.log("---------------------------------\n");
    }
}

async function processData() {
    try {
        const fetchedData = await getData(dataSrc);
        const aux = Object.keys(fetchedData.data[0]);

        const getPropName = () => {
            const propIndex = doRNG(1, aux.length);
            return aux[propIndex];
        };
        const property = getPropName();

        const preparedData = await prepareFetchedData(fetchedData, property);
        await showData(preparedData);
    } catch (error) {
        console.error(error);
    }
}

async function test() {

    console.log(doRNG(0, 10));
}