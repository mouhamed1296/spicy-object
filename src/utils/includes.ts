import { _object } from "global";

/**
 * This function allow you test if a given key belongs to an given object
 * 
 * @param {_object} obj the object that you want to manipulate
 * @param {string} prop the property(key) that you are searching for 
 * @returns {[boolean, string]} an array of two elements where the first element
 * is true/false depending on whether or not the key is found
 * the second element is the path associated to the given prop
 * if found otherwise it's an empty string
 */
const includes = (obj: _object, prop: string): [boolean, string] => {
    const keys = Object.keys(obj)
    let included = false
    let path = ""
    for (const key of keys) {
        if (Array.isArray(obj[key])) {
            let i = 0
            let len = obj[key].length
            while (i < len) {
                if (obj[key][i] instanceof Object) {
                    if (path === "") path += key
                    let [inc, cpath] = includes(obj[key], prop)
                    included = inc 
                    if (included) {
                        path += `.${cpath}`
                        break
                    }
                }
                i++
            }
            if (included) {
                break
            }
        } else if (prop !== key && obj[key] instanceof Object && !Array.isArray(obj[key])) {
            if (path === "") path += key
            let [inc, cpath] = includes(obj[key], prop)
            included = inc 
            if (included) {
                path += `.${cpath}`
                break
            }
        } else if (prop === key) {
            path += key
            included = true
            break
        }
        path = ""
    }
    return [included, path]
}

export { includes }