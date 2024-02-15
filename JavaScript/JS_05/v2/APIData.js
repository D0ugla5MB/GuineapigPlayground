
const URLbase = "https://catfact.ninja/breeds";
const URLquery = "?page=";
const URLlist = [];
const errorList = [];

export async function getUrlList() {
    await getJsonData();
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


async function getJsonData() {
    let jsonPromise = await getJsonResult(URLbase);
    let pageNum = 0;
    const limit = await getJsonProp(jsonPromise);

    while (pageNum <= limit) {
        const pageURL = buildURL(URLbase, URLquery, pageNum);

        try {
            const URLresponse = await fetch(pageURL);

            if (URLresponse.ok) {
                const APIdata = await URLresponse.json();
                URLlist.push(...APIdata.data);
            } else {
                console.error("Error fetching url:", pageURL, URLresponse.statusText);
                errorList.push({ url: pageURL, error: URLresponse.statusText });
            }
        } catch (error) {
            console.error(error);
        }
        pageNum++;
    }
}


