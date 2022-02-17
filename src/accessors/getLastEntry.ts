import { _object } from "global";

/**
 * This function allow you to get the last entry of an object
 * @param obj The object that you want to manipulate
 * @returns an array composed with the key and the value
 */
const getLastEntry = (obj: _object): [string, any] => (obj[Object.entries(obj).length - 1])

export { getLastEntry }