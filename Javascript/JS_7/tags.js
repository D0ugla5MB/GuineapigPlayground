import { binarySearch } from "./script_aux.js";

const tagsApiUrl = 'https://api.waifu.im/tags';

const TAGS_LIST = await getTags();

export function pickTags(...optTag) {
    return optTag;
}

export async function checkTag(tags) {
    const tagsList = [...TAGS_LIST.nsfw, TAGS_LIST.versatile];
    tagsList.sort();
    for (let tagTarget = 0; tagTarget < tags.length; tagTarget++) {
        for (let index = 0; index < tagsList[tagTarget].length; index++) {
            const result = binarySearch(tagsList, tags[tagTarget]);
            if (!result) {
                return false;
            }
            if (result) {
                break;
            }
        }
    }
    return true;
}

async function getTags() {
    return await fetch(tagsApiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Request failed with status code: ' + response.status);
            }
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('An error occurred:', error.message);
        });
}
