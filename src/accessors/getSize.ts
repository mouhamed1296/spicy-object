import { _object } from "global";

/**
 * This function allow you to get the size of an object
 * @param {_object} obj the object that you want to get the size: ;
 * @returns {number} the size of the object
 */
const getSize = (obj: _object): number => Object.keys(obj).length + Object.getOwnPropertySymbols(obj).length

export { getSize }