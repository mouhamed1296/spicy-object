import { _object } from "global";

/**
 * This function allow you to get the first entry of an object
 * @param obj the object that you want to manipulate
 * @returns an array of two values the first is the key
 * the second is the value associated to that key
 */
const getFirstEntry = (obj: _object): [string, any] => (Object.entries(obj)[0])

export { getFirstEntry }