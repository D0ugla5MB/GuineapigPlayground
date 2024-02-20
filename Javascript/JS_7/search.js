import { getParameters } from "./search_parameters.js";

const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const params = (parameters) => {
    const paramProp  = Object.entries(parameters);
    
    for (const [prop, value] of paramProp) {
        if(value == null || value == ""){
            delete parameters[prop];
        }
    }
    console.log(parameters);
    return parameters;
}

const queryParams = new URLSearchParams(params(getParameters()));
const requestUrl = `${apiUrl}?${queryParams}`;

export async function getSearchData() {

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

