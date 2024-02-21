import { getParamListSize, getParameters } from "./search_parameters.js";

const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const params = buildParameters(getParameters());

function buildParameters(parameters){
    const paramProp = Object.entries(parameters);
    const listSize = getParamListSize();
    const cntDeletedProp = validURL();
    let aux = 0;
    for (const [prop, value] of paramProp) {
        if (value == null || value == "" || value == false) {
            cntDeletedProp();
            ++aux;
            delete parameters[prop];
        }
    }
    return { parameters, aux, listSize };

}


const queryParams = new URLSearchParams(params.parameters);
const requestUrl = `${apiUrl}?${queryParams}`;

function validURL() {
    let cnt = -1;

    function count() {
        cnt++;
    }

    return count;
}


export async function getSearchData() {
    const objectLength = params.listSize;
    const counter= params.aux;
    
    console.log(objectLength);
    console.log(counter);
    if (counter >= objectLength || counter == undefined) {
        throw new Error("We haven't those images :/");
    }

    return await fetch(requestUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed with status code: ' + response.status);
            }
        })
        .then(data => {
            // Process the response data as needed
            console.log(data);
        })
        .catch(error => {
            console.error('An error occurred:', error.message);
        });
}

