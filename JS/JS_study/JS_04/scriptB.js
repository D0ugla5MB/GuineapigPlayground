import { getCatFacts, getMyData } from "./dataTest.js";

const urlA = "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp";
const urlB = "https://myanimelist.net/animelist/OokamiDMB";
const urlC = "https://en.wikipedia.org/wiki/Cat";


function excludeUrlParameters(url) {
    const aux = "" + url;

    const firstParameterIndex = function () {
        let i = 0;

        while (aux.charAt(i) != '?' && i < aux.length) {
            i++;
        }
        return i;
    }
    return aux.substring(0, firstParameterIndex());
}

function testA() {

    //console.log(fetchPromise);

    function aux(f) {
        let list = [];
        for (const key in f) {
            if (Object.hasOwnProperty.call(f, key)) {
                list.push(f[key]);
            }
        }
        return list;
    }

    function a0() {
        fetchPromise.then((response) => {

            const cloneA = response.clone();

            console.log(`Received response: ${response.status}`);
            console.log(`Received response: ${aux(response.body)}`);
            console.log(`Received response: ${response.bodyUsed}`);
            console.log(`Received response: ${response.statusText}`);
            console.log(`Received response: ${response.type}`);
            console.log(`Received response: ${cloneA.json().then((j) => { console.log(j) })}`);
            console.log(`Received response: ${cloneA.text().then((t) => { console.log(t) })}`);

        });
    }

    function a1() {
        fetchPromise.then((data) => {
            data.json().then(
                (dataJ) => {
                    console.log(dataJ);
                }
            )
                .then(
                    data.text().then(
                        (dataT) => {
                            console.log(dataT);
                        }
                    )
                );
        });
    }

    function a2() {
        fetchPromise.then(
            (data) => {
                data.json().then(
                    (dataJ) => {
                        console.log(dataJ);
                    }
                );
            }
        );


        const cpPromise = fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );

        cpPromise.then(
            (A) => {
                A.text().then(
                    (dataT) => {
                        console.log(dataT);
                    }
                );
            }
        );

    }

    function a3() {
        const aux = fetchPromise.then(
            (data) => {
                return data.body;
            }
        );
        aux.then(
            (a) => {
                a.getReader().read().then(
                    (read) => {
                        console.log(read.done);
                    }
                );
            }
        );

    }


    console.log(a3());
    console.log("Started request…");

}

function testB(promise) {
    function getMyJson(promise) {

        const auxP = promise.then(
            (myp) => {
                return myp.json();
            }
        );

        return auxP.then(
            (jsonData) => {
                return jsonData;
            }
        );
    }

    getMyJson(promise).then((resolvedData) => {
        console.log(resolvedData);
    });

}

function testC(dataSrc) {
    try {
        const fetchedData = fetch(dataSrc);

        fetchedData.then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
            .then((dataJson) => {
                console.log(dataJson);
            })
    } catch (error) {
        console.log(error);
    }
}

testC(getCatFacts());