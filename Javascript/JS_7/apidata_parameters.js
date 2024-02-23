import { pickTags, checkNsfwTag, TAGS_LIST } from "./apidata_tags.js";

const parameter_list = {
    included_tags: pickTags(""),  //array str
    excluded_tags: "",  //array str
    included_files: null, //array str
    excluded_files: null, //array str
    is_nsfw: isNsfw(checkNsfwTag(await TAGS_LIST, included_tags)),        //str
    gif: false,            //boolean
    order_by: "",       //str
    orientation: "",    //str
    many: true,           //boolean
    full: null,           //boolean
    width: "",          //str
    height: "",         //str
    byte_size: "",       //str
};

function isNsfw(nsfwOption) {
    return nsfwOption;
}

export function getParamListSize() {

    return Object.keys(parameter_list).length;
}

export function getParameters() {
    return parameter_list;
}

function buildParameters(filteredParams) { }


function filterParameters(parameters) {
    const paramProp = Object.entries(parameters);
    const listSize = getParamListSize();
    const cntDeletedProp = validURL();

    for (const [prop, value] of paramProp) {
        if (value == null || value == "" || value == false || value == undefined) {
            delete parameters[prop];
            ++cntDeletedProp;
        }
    }

    return { parameters, deletedParamQty, listSize };
}

