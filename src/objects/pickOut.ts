/**
 * Pick out the keys from an object
 * @param {Record<string, any>} obj The object to pick out the keys from
 * @param {string[]} keys The keys to pick out
 * @param {Record<string, any>} defaults (Optional) The default values to use if the key is not found
 * @returns {Record<string, any>} The object with only the keys picked out
 * @example
 *   const picked = pickOut({ a: 1, b: 2, c: 3 }, ['a', 'b']);
 *   // picked = { a: 1, b: 2 }
 * @example
 *   const picked = pickOut({ a: 1, c: 3 }, ['a', 'b'], { a: 0, b: -1 });
 *  // picked = { a: 1, b: -1 }
 * @example
 *  const picked = pickOut({ a: 1, c: 3 }, ['a', 'b']);
 *  // picked = { a: 1, b: undefined }
 * @author Mohammed Ali Agha <mtxshiftg@gmail.com>
 */ 
export const pickOut = (
  obj: Record<string, any>,
  keys: string[],
  defaults?: Record<string, any>
): Record<string, any> => {
  // Have to use reduce to keep everything immutable - it's part of the challenge :)
  return keys.reduce((acc, key) => {
    // If the key is found in the object, add it to the returned object
    if (obj.hasOwnProperty(key)) {
      return { ...acc, [key]: obj[key] };
    }
    // If the key is not found in the object, and there is a default value, add it to the returned object 
    else if (defaults && defaults.hasOwnProperty(key)) {
      return { ...acc, [key]: defaults[key] };
    }
    // If the key is not found in the object, and there is no default value, set the value to undefined
    return { ...acc, [key]: undefined };
  }, {} /* Have to provide this because it'll use the first item of keys otherwise */);
};

export default pickOut;
