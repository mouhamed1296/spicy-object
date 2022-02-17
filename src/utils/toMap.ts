import { _object } from "global"

/**
 * This function allow you to convert an object to a map
 * @param obj the object that you want to convert to a map
 * @returns a Map
 */
const toMap = (obj: _object): Map<string,any> => {
    return new Map(Object.entries(obj))
}

export { toMap }