import { callPromise } from "./promiseStuff.js"; 

function getPromiseResult(p){
    
    p(callPromise());
}

function makeNewPromise(newp){
    return new Promise(newp);
}


makeNewPromise(getPromiseResult);

