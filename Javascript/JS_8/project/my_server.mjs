import { createServer } from "node:http";
import { join } from 'node:path';
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { putDataOnFile, makeRdnPersonData } from "./api_data.mjs";
import binarySearch from "binary-search";

function starServer(data) {
    const server = createServer();

    server.on('request', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(data);
        res.end();
    });
    server.listen(8000);
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

let c = 0;
while(c++ < 100){

    putDataOnFile("randomdata.txt", makeRdnPersonData());

}

