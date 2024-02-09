function prepareContainer(identifier, content) {
    const destiny = document.getElementById(identifier);
    //destiny.appendChild(content);
    console.log(content);
}
function getURL(inputURL) {
    return inputURL;
}

function getHtmlData(siteURL) {
    fetch(siteURL, {
        mode: "cors",
        method: "GET"
    })
        .then(siteContent => siteContent.blob())
        .then(siteData => siteData.text())
        .catch((errorMsg) => {
            console.error("Something went wrong, my friend :/ I hope it help u:\n", errorMsg);
        });
}

function run(identifier) {
    prepareContainer(identifier, getHtmlData(getURL(prompt("URL:"))));
}

run("container_content");
