function prepareContainer(identifier, content) {
    const destiny = document.getElementById(identifier);
    //destiny.appendChild(content);
}

function getURL(inputURL) {
    return inputURL;
}

function getHtmlData(siteURL) {
    fetch(siteURL, { mode: "cors" })
        .then((result) => {
            if (!result.ok) {
                throw Error(result.statusText);
            }

            const header = result.headers.get("Content-Disposition");
            const parts = header.split(";");
            filename = parts[1].split("=")[1].replaceAll("\"", "");
            return result.blob();
        }
        )
        .then((blob) => {
            if (blob != null) {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                a.remove();
            }
        })
        .catch(error => {
            console.error("Something went wrong,my friend :/ Check it here:\n", error);
        });
}

function run(identifier) {
    prepareContainer(identifier, getHtmlData(getURL(prompt("URL:"))));
}

run("container_content");
