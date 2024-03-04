import { makeIntNumber } from "./script.js";

function makeRdnDataStruct() {

    const keyOptions = [0, 1];
    const key = () => Math.floor((Math.random()) * keyOptions.length);
    const a = 0;
    switch (a) {
        case 0:
            const size = makeIntNumber(1, 10);
            return makeArray(size, false);
        case 1:
            const numElem = makeIntNumber(1, 15);
            return makeList(numElem, true);
        default:
            console.error("option wrong");
            break;
    }
}

function makeArray(size, empty) {
    if (size <= 0) {
        return [];
    }

    let arr = [];

    if (empty) {
        return arr;
    }

    for (let i = 0; i < size; i++) {
        arr[i] = makeIntNumber();
    }
    return arr;
}

function makeList(quantityElem, empty) {
    if (!empty) {
        return [];
    }
    let list = [];
    while (quantityElem-- > 0) {
        list.push(makeIntNumber());
    }
    return list;
}

function makeSets() {
    return new Set();
}

function getRdnStruct() {
    return makeRdnDataStruct();
}

console.log(getRdnStruct());