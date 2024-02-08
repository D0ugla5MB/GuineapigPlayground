
let numA = 1;
let numB = () => ( Math.floor(Math.random() * 10));

let results = [];

function testA() { results.push(`A:${numA += 1}`); }

function testB() { results.push(`B:${numA *= numA}`); }

function testC() { results.push(`C:${numA *= numA}`); }



function doTheThing() {
    const timeA = 100;

    function delayIt(){
        setTimeout(testC, 1);
    }

    setTimeout(testA, timeA);
    setTimeout(testB, timeA);
    setTimeout(delayIt, timeA);
    setTimeout(() => { console.log(results); }, timeA+1000);
}
doTheThing();
