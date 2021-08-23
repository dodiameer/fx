/**
 * Deep clone an object or array
 * @param obj the object or array to clone
 * @returns the cloned object or array
 * @todo Better Typescript types for return
 * @example 
 *  const obj = { a: 1, b: 2, c: { d: 3, e: 4 } };
 *  const clone = deepClone(obj);
 *  // clone is { a: 1, b: 2, c: { d: 3, e: 4 } }, 
 *  // but clone.c is not the same object as obj.c
 *  // so doing clone.c.e = 5 would not change obj.c.e 
 *  // and vice versa
 * @author Mohammed Ali Agha <mtxshiftg@gmail.com>
 */
export const deepClone = (obj: any): any => {
  // It's an object
  if (typeof obj === 'object') {
    // If it's an array, go through each element and clone it
    if (obj instanceof Array) {
      return obj.map((item) => deepClone(item));
    } 
    // It's an object, so go through each property and clone it
    else {
      return Object.keys(obj).reduce((acc, key) => {
        return {...acc, [key]: deepClone(obj[key])}; 
      }, {} /* `acc` will be an empty object at the start */);
    }
  }
  // It's not an object - Return it normally
  return obj;
};

export default deepClone;