import { _object } from "global"
import { foreach, includes } from "../utils"

/**
 * This function allow you to get the maximum value based on a key inside the object
 * @param obj the object that you want to manipulate
 * @param key the key inside the object that you want to get the maximum value
 * @returns a number representing the maximum value
 */
const max =  (obj: _object, key: string): number => {
    if (!includes(obj, key)) return 0
    let maxArray: Array<number> = []
    foreach(obj, (el: _object) => {
        if (includes(obj, key)) maxArray.push(el[key])
    })
    let i = 0
    let len = maxArray.length
    let max = maxArray[i] || 0
    while(i < len) {
        if (maxArray[i] > max) max = maxArray[i]
        i++
    }
    return max
}

export { max }