export function getCatFacts(){
    const url = "https://cat-fact.herokuapp.com/facts";
    const response =  fetch(url);
    return response;
}

export async function getMyData() {
    const url = '';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'community-food2fork.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}