import { getBreedList } from "./CatsData.js";
import { getNamesList } from "./NamesData.js";
import { doRNG } from "./MyUtils.js";

const breedsList = await getBreedList();
const namesList = await getNamesList();

export function chooseRdnName() {
    const sizeLN = namesList.length;
    return namesList[doRNG(0, sizeLN)];
}
export function chooseRdnBreed() {
    const sizeLB = breedsList.length;
    return breedsList[doRNG(0, sizeLB)];
}

export class Owner {
    name = null;
    cats = null;

    constructor(){
        this.name = chooseRdnName();
        this.cats = this.makeCats();
    }

    makeCats(){
        const quantity = () => doRNG(0, 10);
        const listCat = [];

        for (let index = 0; index < quantity(); index++) {
            listCat.push(chooseRdnBreed());            
        }
        return listCat.toString();
    }
}



