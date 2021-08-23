import getFromPath from "../objects/getFromPath"

/**
 * Pulls out the value from each object in a given array at the given key. Similar to Underscore's `pluck`
 * @param {Array} arr The array to pull values from
 * @param {string} key The key to pull values from. Can be a dot-separated path for nested values
 * @returns {Array} The array of values pulled from each object in the array
 * @example
 *   pullFromKey([{a: 1}, {a: 2}], 'a') // [1, 2]
 *   pullFromKey([{a: 1}, {a: 2}], 'b') // [null, null]
 *   pullFromKey([{a: {b: 1}}, {a: {b: 2}}], 'a.b') // [1, 2]
 * @author Mohammed Ali Agha <mtxshiftg@gmail.com>
 */
export const pullFromKey = (array: Record<string, any>[], key: string) => {
  return array.map(obj => getFromPath(obj, key))
}

export default pullFromKey
