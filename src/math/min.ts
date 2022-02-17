import { _object } from "global"
import { foreach, includes } from "../utils"

/**
 * This function allow you to get the minimum value based on a key inside the object
 * @param obj the object that you want to manipulate
 * @param key the key inside the object that you want to get the minimum value
 * @returns a number representing the minimum value
 */
const min =  (obj: _object, key: string): number => {
    if (!includes(obj, key)) return 0
    let minArray: number[] = []
    foreach(obj, (el: _object) => {
        if (includes(obj, key)) minArray.push(el[key])
    })
    let i = 0
    let len = minArray.length
    let min = minArray[i]
    while(i < len) {
        if (minArray[i] < min) min = minArray[i]
        i++
    }
    return min
}

export { min }