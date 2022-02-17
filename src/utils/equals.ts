import { _object } from "global";
import { compare } from "../helpers";

/**
 * This function allow you to compare to objects
 * @param o1 the first object
 * @param o2 the second object
 * @returns boolean
 */
const equals = (o1: _object, o2: _object): boolean => {
    return compare(o1, o2) && compare(o1, o2, 1)
}

export { equals }