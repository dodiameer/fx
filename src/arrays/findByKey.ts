/**
 * Find the first object in an array where the specified key equals the specified value
 * @param {Record<string, any>[]} array The array that contains the objects to be tested
 * @param {string} key The key that the objects will be tested on
 * @param {any} value The value that the key of an object should be
 * @returns {Record<string, any> | null} An object if it was found, `null` if not found
 * @throws `First argument must be an array` Will be thrown if `array` isn't an array
 * @throws `Array contains non-object values` Will be thrown if `array` contains an item that isn't an object
 * @example
 *   const data = [{ id: 1 }, { id: 2 }, { id: 3 }]
 *   const object = findByKey(data, "id", 1)
 *   // object = { id: 1 }
 * @example
 *   const data = [{ id: 1 }, { id: 2 }, { id: 3 }]
 *   const object = findByKey(data, "id", 5)
 *   // object = null
 * @author Mohammed Ali Agha <mtxshiftg@gmail.com>
 */
export const findByKey = (array: Record<string, any>[], key: string, value: any): Record<string, any> | null => {
  //@ts-ignore We're checking for JS users
  if (!(array instanceof Array)) {
    throw new Error("First argument must be an array")
  }
  if (!array.every(i => typeof i === "object")) {
    throw new Error("Array contains non-object values")
  }
  return array.find(i => i[key] === value) ?? null
}

export default findByKey;
