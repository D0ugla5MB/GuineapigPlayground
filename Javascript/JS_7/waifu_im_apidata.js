const apiSearchURL = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
const searchParams = buildParameters(getParameters());
const queryParams = new URLSearchParams();
const apiTagsURL = 'https://api.waifu.im/tags';
const tagsParams = "full";

const requestUrl = encodeURI(`${apiSearchURL}?${queryParams}`);

export async function getSearchData() {

    for (const tag in searchParams) {
        if (Array.isArray(searchParams[tag])) {
            searchParams[tag].forEach(value => {
                queryParams.append(tag, value);
            });
        } else {
            queryParams.set(tag, searchParams[tag]);
        }
    }

    fetch(requestUrl)
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
