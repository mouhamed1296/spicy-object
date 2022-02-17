import { _object } from "global";
import { getSize } from "../accessors";

/**
 * This function allow you to test if an object is empty
 * @param obj the object to test
 * @returns boolean
 */
const isEmpty =  (obj: _object):boolean => (getSize(obj) === 0)

export { isEmpty }