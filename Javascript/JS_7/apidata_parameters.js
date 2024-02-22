const parameter_list = {
    included_tags: ["maid"],  //array str
    excluded_tags: "",  //array str
    included_files: null, //array str
    excluded_files: null, //array str
    is_nsfw: isNsfw(""),        //str
    gif: false,            //boolean
    order_by: "",       //str
    orientation: "",    //str
    many: true,           //boolean
    full: null,           //boolean
    width: "",          //str
    height: "",         //str
    byte_size: "",       //str
};

function isNsfw(nsfwOption){

}



export function getParamListSize() {
    
    return Object.keys(parameter_list).length;
}

export function getParameters() {
    return parameter_list;
}


function buildParameters(parameters) {
    const paramProp = Object.entries(parameters);
    const listSize = getParamListSize();
    const cntDeletedProp = validURL();
    let deletedParamQty = 0;
    for (const [prop, value] of paramProp) {
        if (value == null || value == "" || value == false) {
            cntDeletedProp();
            ++deletedParamQty;
            delete parameters[prop];
        }
    }
    return { parameters, deletedParamQty, listSize };

}

function validURL() {
    let cnt = -1;

    function count() {
        cnt++;
    }

    return count;
}
