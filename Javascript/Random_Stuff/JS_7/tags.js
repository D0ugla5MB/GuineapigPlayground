const apiUrl = 'https://api.waifu.im/tags';

export async function getTags() {
    return await fetch(apiUrl)
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
