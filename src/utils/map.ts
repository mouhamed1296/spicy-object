import { CallbackFunction } from "callbacks"
import { _object } from "global"

/**
 * This function allow you to map through an object
 * @param obj the object that you want to map through
 * @param fn the function that you want to apply to evry entries of an object
 * @returns {_object} an object
 */
const map = (obj: _object, fn: CallbackFunction): _object => { 
    return Object.fromEntries(
        Object.entries(obj).map(
            ([key, value], index) => [key, fn(value, key, index)]
        )
    )
}

export { map }