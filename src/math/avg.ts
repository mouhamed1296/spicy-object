import { _object } from "global"
import { foreach, includes } from "../utils"
import { sum } from "./sum"

/**
 * 
 * @param obj the object that you want to manipulate
 * @param key the key that you want to get the average value inside the object
 * @returns number
 */
const avg = (obj: _object,key: string): number => {
    if (!includes(obj, key)) return 0
    let myArray: number[] = []
    foreach(obj, (el: _object) => {
        if (includes(obj, key)) myArray.push(el[key])
    })
    const avg = sum(obj, key) / myArray.length
    return avg
}

export { avg }