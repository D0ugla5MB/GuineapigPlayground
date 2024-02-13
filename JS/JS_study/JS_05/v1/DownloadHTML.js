const rng = () => Math.floor((1 + Math.random()) * 10);
const dataSrc = `https://catfact.ninja/breeds?limit=${rng()}`;

function makeContent(data, elemId) {
    const element = document.getElementById(elemId);
    const container = document.createElement("div");

    container.appendChild(data[2]);
    return container;
}

function checkFetch(fetchedData) {
    if (!fetchedData.ok) {
        throw new Error("The data weren't fetched");
    }
    return fetchedData.json();
}

function showData(fetchedData) {
    console.log(fetchedData);
}

async function getData(dataOrigin) {
    const fetchedData = await fetch(dataOrigin);
    console.log(fetchedData);
    return checkFetch(fetchedData);
}

async function run(dataSrc) {
    try {
        const data = await getData(dataSrc);
        await makeContent(data.breed);
        showData(data);
    } catch (error) {
        console.error(error);
    }
}

run(dataSrc);
