//import { buildURL } from "./PrepareContent";
const namesDataList = [];

export async function getNamesList(){
    await prepareNamesData();
    return namesDataList;
}

async function selectNamesData(res, inc) {
    const baseURL = "https://randomuser.me/api/";
    const URLquery = `?results=${res}&inc=${inc}&noinfo`;

    try {
        const response = await fetch(`${baseURL}${URLquery}`);
        const data = await response.json();
        return await data.results; 
    } catch (error) {
        console.error('Error fetching API data:', error);
        return []; 
    }
}

async function prepareNamesData() {
    const APIdata = await selectNamesData(5, "name");

    for (let i = 0; i < APIdata.length; i++) {
        const name = {
            first: APIdata[i]["name"]["first"],
            last: APIdata[i]["name"]["last"]
        };
        namesDataList.push(`${name.first} ${name.last}`);
    }

    return await APIdata;
}


class Owner {
    constructor(name, age, cats) {
        this.name = name;
        this.age = age;
        this.cats = cats;
    }
}


