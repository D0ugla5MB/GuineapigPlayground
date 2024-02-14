function doRNG(min, max) {
    return Math.floor((Math.random() * (max - min) + min));
}
const dataSrc = `https://catfact.ninja/breeds?limit=${doRNG(0, 30)}`;

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
            for (let index = 0; index < fetchedData.data.length; index++) {
                let tuple = {
                    breedName: fetchedData.data[index]["breed"],
                    property: propName,
                    propValue: fetchedData.data[index][`${propName}`]  
                }
                tupleList.push(tuple);
            }
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
        console.log(data[index]);

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
processData();