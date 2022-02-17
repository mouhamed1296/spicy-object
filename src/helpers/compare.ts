import { getSize } from "../accessors"
/**
 * 
 * @param o1 first object
 * @param o2 second object
 * @param pointer a pointer that help us compare by keys or by values
 * @returns boolean true when the objects are equal based on the pointer false otherwise
 */
const compare = (o1:Object, o2:Object, pointer: 0 | 1 = 0): boolean => {
    //get objects entries
    const entries1 = Object.entries(o2)
    const entries2 = Object.entries(o1)
    //compare objects sizes
    if (getSize(o1) !== getSize(o2)) return false
    //initialize the counter when objects have equal sizes
    let  i = getSize(o1)
    while (i--) {
        //if value is an array
        if (Array.isArray(entries1[i][pointer]) && Array.isArray(entries2[i][pointer])
        && (entries1[i][pointer].length === entries2[i][pointer].length)) {
            let j = entries1[i][pointer].length
            while (j--) {
                if (entries1[i][pointer][j] instanceof Object && entries2[i][pointer][j] instanceof Object) {
                    if (!compare(entries1[i][pointer][j], entries2[i][pointer][j], pointer)) return false
                    continue
                }
                if (entries1[i][pointer][j] !== entries2[i][pointer][j]) return false
            }
            continue
        }
        // if value is an object
        if (entries1[i][pointer] instanceof Object && entries2[i][pointer] instanceof Object) {
            if (!compare(entries1[i][pointer], entries2[i][pointer], pointer)) return false
            continue
        }
        if (entries1[i][pointer] !== entries2[i][pointer]) return false
    }
    return true
}

export default compare