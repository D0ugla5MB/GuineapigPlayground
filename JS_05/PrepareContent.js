import { getUrlList } from "./CatsData.js";
import { prepareNamesData } from "./NamesData.js";
import { doRNG } from "./MyUtils.js";

const breedCatList = [];
const namesList = [];

export async function getCatBreedList() {
    async function makeCatBreedList() {
        const URL_API_DATA = await getUrlList();

        async function extractBreed(data) {
            for (let index = 0; index < data.length; index++) {
                breedCatList.push(data[index]["breed"]);
            }
        }
        await extractBreed(URL_API_DATA);
    }
    await makeCatBreedList();
    return breedCatList;
}

export async function getNamesList() {
    async function makeNamesList() {
        const auxNamesList = await prepareNamesData();
        async function extractNameParts(data) {
            for (let index = 0; index < data.length; index++) {
                const name = { frstName: data[index]["name"]["first"], lastName: data[index]["name"]["last"] };
                namesList.push(`${name.frstName} ${name.lastName}`);
            }
        }
        await extractNameParts(auxNamesList);
    }
    await makeNamesList();
    return namesList;
}

export class Owner {
    name = getNamesList();
    cat = getCatBreedList();

    constructor() {
        getNamesList();
        getCatBreedList();
        this.name = this.name[doRNG(0, this.name.length)];
        this.cat = breedCatList[doRNG(0, breedCatList.length)];
    }

    getName(){
        return this.name;
    }
    getCat(){
        return this.cat;
    }

}

export function buildURL(URLbase = null, URLquery = null, pageNum = null) {
    return `${URLbase}${URLquery}${pageNum}`;
}


