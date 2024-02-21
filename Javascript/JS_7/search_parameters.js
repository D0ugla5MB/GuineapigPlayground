import { getTags } from "./tags.js";

const tagsList = await getTags();

const parameter_list = {
    included_tags: "",  //array str
    excluded_tags: "",  //array str
    included_files: null, //array str
    excluded_files: null, //array str
    is_nsfw: "",        //str
    gif: false,            //boolean
    order_by: "",       //str
    orientation: "",    //str
    many: false,           //boolean
    full: null,           //boolean
    width: "",          //str
    height: "",         //str
    byte_size: ""       //str
};

export function getParamListSize(){
    return 12;
}

function cntNumProperties(){
    return Object.values(parameter_list).length; //need being fixed
}

export function getParameters() {
    return parameter_list;
}


