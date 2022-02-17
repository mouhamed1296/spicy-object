import { _object } from "global";
import { getEntryByKey } from "../accessors";
import { equals } from "./equals";
import { foreach } from "./foreach";
import { includes } from "./includes";

/**
 * This function allow you to get the difference of to object (they must have the same size)
 * @param o1 the first object
 * @param o2 the second object
 * @returns the difference between the two object
 */
const diff = (o1: _object, o2: _object): _object => {
    let diffObject: _object = {}
    foreach(o1, (value, key = "") => {
        if(includes(o2, key)) {
            let value2 = getEntryByKey(o2, key)
            if (value instanceof Object
                && (value2 instanceof Object)
                && !equals(value, value2)
            ) {
                diffObject[key] = value
            }
            if (value !== value2) {
                diffObject[key] = value
            }
        }
    })
    return diffObject
}

export { diff }