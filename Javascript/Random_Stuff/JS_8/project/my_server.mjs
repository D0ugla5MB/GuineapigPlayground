import { createServer } from "node:http";
import { join } from 'node:path';
import { readdirSync, statSync, writeFileSync, readFileSync } from 'node:fs';
import binarySearch from "binary-search";

function startServer(data) {
    const strFormatData = data.toString();
    
    console.log(data);
    if(strFormatData.length <= 0 || strFormatData === undefined){
        console.error("AAAAAA");
    }
    
    const server = createServer();
    server.on('request', (req, res) => {

        if (typeof data === 'undefined' || data.toString().trim() === '') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            console.error("The server data is currently empty.");
            res.write('The server data is currently empty.');
            res.end();

        } else {
            console.log("bdhsbdhsadb")
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
            res.end();
        }
    });

    // server.listen(8000);
}

function getAllFilesPath(rootdir) {
    const allPaths = [];

    function walkDirSync(dirPath) {
        try {
            const dirContent = readdirSync(dirPath);

            for (const fileOrDir of dirContent) {
                const filePath = join(dirPath, fileOrDir);
                if (filePath.includes("node")) {
                    continue;
                }
                const stats = statSync(filePath);

                if (stats.isDirectory()) {
                    walkDirSync(filePath);
                } else {
                    allPaths.push(filePath);
                }
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    walkDirSync(rootdir);
    return allPaths.sort();
}

function emptyFileData(file) {
    const paths = getAllFilesPath(".");
    if (
        binarySearch(paths, file, function (element, needle) { return element.includes(needle); })
    ) {
        writeFileSync(file, "");
        return true;
    }
    console.error("File does not exists");
    return false;
}

function getData(strPiece) {
    const pathList = getAllFilesPath(".");
    const checkPath = () => {
        const listSize = pathList.length;
        let pos = 0;
        while (pos < listSize) {
            const path = pathList[pos];
            if (path.includes(strPiece)) {
                return { valid: true, file: path };
            }
            pos++;
        }
    }
    const checkedPath = checkPath();
    if (checkedPath.valid) {
        return readFileSync(checkedPath.file);
    }
    return "";
}

startServer();

