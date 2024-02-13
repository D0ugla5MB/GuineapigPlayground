const rng = () => Math.floor((1 + Math.random()) * 10);
const dataSrc = `https://catfact.ninja/breeds?limit=${rng()}`;

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

async function prepareFetchedData(fetchedData) {
    try {
        if (fetchedData !== undefined && fetchedData.data) {
            const list = [];
            for (let index = 0; index < fetchedData.data.length; index++) {
                list.push(fetchedData.data[index].breed);
            }
            return list;
        }
        throw Error("Empty or undefined data");
    } catch (error) {
        console.error(error);
    }
}

async function showData(data) {
    console.log(`My required data are:\n\t${data}`);
}

async function processData() {
    try {
        const fetchedData = await getData(dataSrc);
        const preparedData = await prepareFetchedData(fetchedData);
        await showData(preparedData.join('\n\t'));
    } catch (error) {
        console.error(error);
    }
}

processData();


