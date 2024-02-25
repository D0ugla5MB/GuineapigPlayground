import { verifyTags, getParamListSize, getParameters } from "./paramters.js";

const searchApiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const queryParams = new URLSearchParams();
const PARAMETER_LIST = getParameters();

export async function doSearch() {
    const tags = await verifyTags();
    const paramSize = getParamListSize();

    if (!tags || paramSize <= 0) {
        throw new Error("Smething wrong happened :/");
    }
    await getSearchData();
}


async function getSearchData() {
    for (const param in PARAMETER_LIST) {
        if (Array.isArray(PARAMETER_LIST[param])) {
            PARAMETER_LIST[param].forEach(value => {
                queryParams.append(param, value);
            });
        } else {
            queryParams.set(param, PARAMETER_LIST[param]);
        }
    }
    const requestUrl = `${searchApiUrl}?${queryParams.toString()}`;

    fetch(requestUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed with status code: ' + response.status);
            }
        })
        .then(data => {
            console.log(data);
            console.log(data.images[0].tags);
        })
        .catch(error => {
            console.error('An error occurred:', error.message);
        });
}
