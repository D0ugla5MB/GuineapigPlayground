import { pickTags, checkTag } from "./tags.js";
import { getRandomInt, getRandomBool } from "./script_aux.js";

const PARAMETERS = {
    included_tags: pickTags("hentai", "raiden-shogun", "maid"), //arr str  ^[a-zA-Z0-9-]+$, []
    is_nsfw: getRandomBool(), //str null, T, F
    gif: false, //bool
    order_by: "RANDOM", //str FAVORITES, UPLOADED_AT, RANDOM"
    orientation: "RANDOM", //str ORTRAIT, LANDSCAPE, RANDOM
    many: getRandomBool(), //bool
    width: `>=${getRandomInt(100, 2000)}`,  //str ^(>=|<=|=|!=|>|<)[0-9]+$ 
    height: `>=${getRandomInt(100, 2000)}`,//str ^(>=|<=|=|!=|>|<)[0-9]+$
};


export function verifyParameters(paramList) {
    for (const key in paramList) {
        const prop = paramList[key];
        if (prop === null || prop === "" || prop === undefined || prop === false) {
            delete paramList[key];
        }
    }
}

export function getParamListSize() {
    return Object.keys(PARAMETERS).length;
}

export function getParameters() {
    verifyParameters(PARAMETERS);
    return PARAMETERS;
}

export function verifyTags() {
    const existsTag = checkTag(PARAMETERS.included_tags);
    if (!existsTag) {
        return false;
    }
    return true;
}

