import { CallbackFunction } from "callbacks"
import { _object } from "global"

/**
 * This function allow you to loop through an object it's like a wrap of the array forEach method
 * @param obj the object that you want to loop through
 * @param fn the function that you want to apply on evry entry of the object
 * @returns void
 */
const foreach = (obj: _object, fn: CallbackFunction): void => {
    Object.entries(obj).forEach(([key, value], index) => {
        fn(value, key, index)
    })
}

export { foreach }