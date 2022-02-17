import { _object } from "global"

/**
 * This function allow you to get a value of an entrie inside the object based on the path that lead to it
 * @param obj The object that you want to manipulate
 * @param path the path that lead to the object 
 * @returns the value associated with the given path
 * @example ex: "fav.sports.0" is the path for const obj = {"fav": {sports:["football", "basketball"]}}
 * and getEntryByPath(obj, "fav.sports.0") will output "football"
 */
const getEntryByPath = (obj:_object, path: string): any => {
    const pathComponents = path.split(".")
    const nestLevel = pathComponents.length
    let i = 0, holder = obj
    while (i < nestLevel) {
        holder = holder?.[pathComponents[i]]
        i++
    }
    return holder
}

export { getEntryByPath }