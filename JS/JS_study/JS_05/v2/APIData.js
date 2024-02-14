
const URLbase = "https://catfact.ninja/breeds?page=";
const URLlist = [];

function buildURL(URLbase, pageNum) {
    return `${URLbase}${pageNum}`;
}

export async function getUrlList(){
    await checkDataVol();
    console.log(URLlist);
}

async function checkDataVol() {

    let pageNum = 0;

    while (pageNum < 100) {
        const pageURL = buildURL(URLbase, pageNum);

        try {
            const URLresponse = await fetch(pageURL);

            if (URLresponse.ok) {
                const APIdata = await URLresponse.json();
                URLlist.push(...APIdata.data); 
            } else {
                console.error("Error fetching url:", pageURL, URLresponse.statusText);
                URLlist.push({ url: pageURL, error: URLresponse.statusText }); 
            }
        } catch (error) {
            console.error("Error:", error);
        }

        pageNum++;
    }

    return URLlist;
}


