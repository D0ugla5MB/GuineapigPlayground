exports.test = function () {
    /* 
        exports.myDateTime = function () {
    
            return `<h1>${Date()}</h1>`;
        };
     */
    return  a();

}

async function testFile() {
    const apiUrl = 'https://api.waifu.im/search';  // Replace with the actual API endpoint URL
    const params = {
        included_tags: ['raiden-shogun', 'maid'],
        height: '>=2000'
    };

    const queryParams = new URLSearchParams();

    for (const key in params) {
        if (Array.isArray(params[key])) {
            params[key].forEach(value => {
                queryParams.append(key, value);
            });
        } else {
            queryParams.set(key, params[key]);
        }
    }
    const requestUrl = `${apiUrl}?${queryParams.toString()}`;

    return fetch(requestUrl)
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

function a() {
    return `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tehehe</title>
</head>
<body>
    <h1>${Date()}</h1>
</body>
</html>`;
};

//DOM STUFF ARENT RECOGNIZED BY SERVER-SIDE PART
function b() {
    const h1 = document.createElement('h1');
    h1.textContent = "This is an H1 created with JavaScript";
    const container = document.getElementById('my-container');
    container.appendChild(h1);
}

async function c() {
    var fs = require('fs');

    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
    });
}
