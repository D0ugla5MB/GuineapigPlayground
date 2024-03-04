
const URLbase = "https://catfact.ninja/breeds";
const URLquery = "?page=";
const breedList = [];

export async function getBreedList() {
    await prepareBreedListData(await getJsonData());
    return breedList;
}

async function prepareBreedListData(dataList) {
    for (let i = 0; i < dataList.length; i++) {
        breedList.push(dataList[i]["breed"]);
    }
}

async function getJsonData() {
    let jsonPromise = await getJsonResult(URLbase);
    let pageNum = 0;
    const limit = await getJsonProp(jsonPromise);
    const URLlist = [];

    while (pageNum <= limit) {
        const pageURL = buildURL(URLbase, URLquery, pageNum);

        try {
            const URLresponse = await fetch(pageURL);

            if (URLresponse.ok) {
                const APIdata = await URLresponse.json();
                URLlist.push(...APIdata.data);
            }
        } catch (error) {
            console.error(error);
        }
        pageNum++;
    }
    return URLlist;
}

async function getJsonResult(source) { //URLbase
    return await fetch(source).then((jsonData) => jsonData.json());
}

async function getJsonProp(jsonResp) { //Last URL, and loop's control
    return jsonResp.last_page;
}

function buildURL(URLbase, URLquery, pageNum) {
    return `${URLbase}${URLquery}${pageNum}`;
}




