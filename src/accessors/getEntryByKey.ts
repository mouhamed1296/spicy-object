import { _object } from "global"
import { includes } from "../utils"
import { getEntryByPath } from "./getEntryByPath"

/**
 * This function allow you to get an entry based on the key
 * doesn't matter how deep the key is nested inside the object
 * @param obj the object that you want to maipulate
 * @param key the key that you want to get the value
 * @returns the value associated to the given key no matter
 *  how deep the key was nested inside the object
 * @example const obj = {
 *      "firstname": "Mamadou",
 *      "lastname": "sarr",
 *      "favourites": {
 *          "sports": ["football", "basketball", "handball"],
 *          "music": ["rnb", "jazz"]
 *      }
 * }
 * getEntryByKey(obj, "music") will output ["rnb", "jazz"]
 */
const getEntryByKey = (obj: _object, key: string): any => {
    return getEntryByPath(obj, includes(obj, key)[1])
}

export { getEntryByKey }