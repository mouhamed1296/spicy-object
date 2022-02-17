import { _object } from "global"
import { foreach, includes } from "../utils"

/**
 * This function allows you to get the sum of values based on an object key
 * @param obj the object that you want to manipulate
 * @param key the key that you want to get the total of sum of values
 * @returns number representing the result of the sum
 */
const sum = (obj: _object,key: string): number => {
    if (!includes(obj, key)) return 0
    let sum: number = 0
    foreach(obj, (el: _object) => {
        if (includes(obj, key)) sum += el[key]
    })
    return sum
}

export { sum }