export function makeIntNumber(min=0, max=1000){
    return Math.floor(Math.random() * ((max - min) + min));
}



function makeRdnString(size){
    //const txtBase = /[A-Za-z0-9]/;
    let str = "";

    for (let index = 0; index < size; index++) {
        const rdnChar = () => {
            const asciiCode = Math.floor(Math.random() * (122 - 48 + 1)) + 48;
            return String.fromCharCode(asciiCode).toString();
        }        
        str += rdnChar();
    }

    return str;
}

function putRdnTxt(rdnTxt){
    const elemRef = document.querySelector("main");
    const elem = document.createElement("h1");
    elem.textContent = rdnTxt;
    elemRef.appendChild(elem);

}

function getMyData(content){
    const myResponse = new Response(content, {
        status: 200,
        headers: {
            "Content-type": "text/plain"
        }
    });
    return Promise.resolve(myResponse);
}


function  run(data){

    fetch(data)
    .then(content => content.text());
}


