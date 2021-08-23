/**
 * Get a value from a dot-separated path in an object.
 * @param obj The object to get the value from.
 * @param path The path to the value.
 * @returns {any | null} The value at the path, `null` if the path wasn't found.
 * @example
 *   const obj = {
 *     a: {
 *       b: {
 *         c: 'hello'
 *       }
 *     }
 *   };
 *   getFromPath(obj, 'a.b.c') // 'hello'
 *   getFromPath(obj, 'a.b.d') // null
 * @author Mohammed Ali Agha <mtxshiftg@gmail.com>
 */
export const getFromPath = (obj: Record<string, any>, path: string): any => {
  return path.split(".").reduce((acc, key) => acc?.[key] ?? null, { ...obj })
}

export default getFromPath;