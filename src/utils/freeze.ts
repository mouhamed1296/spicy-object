import { _object } from "global"

/**
 * This function allow you freeze an object no matter his depth
 * @param obj The object that you want to be frozen
 * @param nestLevel the level of freeze that you want
 * @returns a frozen version of the object
 */
const freeze = (obj: _object, nestLevel: number = 0): Readonly<_object> => {
    if (nestLevel >= 1) {
        const keys: string[] = Object.keys(obj)
        for (const key of keys) {
            if (obj[key] instanceof Object) {
                freeze(obj[key], nestLevel - 1)
            }
        }
    }
    return Object.freeze(obj)
}

export { freeze }