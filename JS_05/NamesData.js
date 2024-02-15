//import { buildURL } from "./PrepareContent";
const namesDataList = [];

export async function getAPIdata(res, inc) {
    const baseURL = "https://randomuser.me/api/";
    const URLquery = `?results=${res}&inc=${inc}&noinfo`;

    try {
        const response = await fetch(`${baseURL}${URLquery}`);
        const data = await response.json();
        return data.results; 
    } catch (error) {
        console.error('Error fetching API data:', error);
        return []; 
    }
}

export async function prepareNamesData() {
    try {
        const APIdata = await getAPIdata(5, "name");
        namesDataList.push(...APIdata);
    } catch (error) {
        console.error('Error processing API data:', error);
    }
    return namesDataList;
}


class Owner {
    constructor(name, age, cats) {
        this.name = name;
        this.age = age;
        this.cats = cats;
    }
}


