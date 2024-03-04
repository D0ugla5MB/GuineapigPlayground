import { getTags } from "./tags.js";

const tagsList = await getTags();

const parameter_list = {
    included_tags: tagsList["versatile"][0],  //array str
    excluded_tags: null,  //array str
    included_files: null, //array str
    excluded_files: null, //array str
    is_nsfw: "",        //str
    gif: null,            //boolean
    order_by: "",       //str
    orientation: "",    //str
    many: null,           //boolean
    full: null,           //boolean
    width: "",          //str
    height: "",         //str
    byte_size: ""       //str
};


export function getParameters() {
    return parameter_list;
}


