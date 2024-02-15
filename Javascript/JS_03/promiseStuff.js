"use strict";



function getNewPromise(p) {
    return new Promise(p);
}

function startChain(f) {
    f(getNum());
}

function getNum() {
    return Math.floor(Math.random() * 100);
}

function doSomethingA(a) {
    return a * a;
}

function doSomethingB(b) {
    return b * 2 - 1;
}

function checkNumber(c){
    if(c < 1000){
        return console.error("Number is too short");
    }
    return console.info(`Ur number is ${c}`);
}


export function callPromise() {

    return getNewPromise(startChain)
        .then(doSomethingA)
        .then(doSomethingB)
        .then(checkNumber)
}

