import { getUrlList } from "./APIData.js";

const URL_API_DATA = await getUrlList();

export function checkData(data = URL_API_DATA) {
    console.log(data);
}