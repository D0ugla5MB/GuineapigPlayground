import { getTags } from "./waifu_im_apidata.js";

export const TAGS_LIST = await getTags(); 

export function checkNsfwTag(tagsNsfwList, tagOpt) {
    return Object.keys(tagOpt).includes(tagsNsfwList);
}

export function pickTags(...tagOpt){
    return tagOpt;
}
