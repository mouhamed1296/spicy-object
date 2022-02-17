import { _object } from "global"
import { filter } from "./filter"
import { isEmpty } from "./isEmty"

/**
 * This method allow you to remove nullish values from an object
 * @param obj The object that you want to remove all nullish entries
 * (entries that have nullish values)
 * @returns an object safe from nullish values
 */
const makeNullSafe = (obj: _object): void => {
    const entries = Object.entries(obj)
    for (const entrie of entries) {
        if (entrie[1] === null || entrie[1] === undefined) delete obj[entrie[0]]
        if (Array.isArray(entrie[1])) {
            let i = 0
            const len = entrie[1].length
            if (len === 0) {
                delete obj[entrie[0]]
            }
            else {
                while (i < len) {
                    if (entrie[1][i] instanceof Object) {
                        makeNullSafe(entrie[1][i])
                    }
                    if (entrie[1][i] === null || entrie[1][i] === undefined) {
                        obj[entrie[0]] = filter(obj[entrie[0]], (item: any) => item)
                    }
                    i++
                }
            }
        }
        if (entrie[1] instanceof Object) {
            if (isEmpty(entrie[1])) {
                delete obj[entrie[0]]
            } else {
                makeNullSafe(entrie[1])
                if (isEmpty(entrie[1])) delete obj[entrie[0]]
            }
        }
    }
}

export { makeNullSafe }