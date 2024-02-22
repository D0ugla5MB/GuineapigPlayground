const apiSearchURL = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const searchParams = buildParameters(getParameters());
const queryParams = new URLSearchParams(searchParams.parameters);
const apiTagsURL = 'https://api.waifu.im/tags';
const tagsParams = "full";

const requestUrl = encodeURI(`${apiSearchURL}?${queryParams}`);

export async function getSearchData() {
    const objectLength = searchParams.listSize; //POSSIBLE FUTURE ISSUE
    const counter = searchParams.deletedParamQty; //POSSIBLE FUTURE ISSUE
    console.log(requestUrl);
    if (counter >= objectLength || counter == undefined || counter == null) {
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


export async function getTags() {
    return await fetch(apiTagsURL)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed with status code: ' + response.status);
            }
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('An error occurred:', error.message);
        });
}
