import { getParameters } from "./apidata_parameters.js";
import { getTags } from "./waifu_im_apidata.js";

const TAGS_LIST = await getTags(); //check for anomaly issue
const parametersList = getParameters();

export function pickTags(...tagOpt){}

function filterTags(pickedTags, nsfwOpt){}

function checkNsfwTag(nsfwAttribute) {
    return Object.keys(nsfwAttribute).includes();
}

function arrangeTags(tList, nsfwState) {
    if (!nsfwState) {
        return { nsfwTags: tList.nsfw, versTags: tList.varsatile };
    }
    return { versTags: tList.varsatile };
}

function buildTags(paramOpt, nsfwOpt, tagOptions){
    return tagOptions;
}

