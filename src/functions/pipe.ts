/**
 * Create a pipe that calls each function in sequence, passing the return value of one function to the next.
 * 
 * @param {Function[]} fns The functions to pipe. Functions can be async or sync.
 * @returns {(initialValue: any) => Promise<any>} The reusable pipe. It takes a single argument, the argument for the first function, and returns a Promise.
 * @example
 *  const pipeline = pipe(
 *    (x) => x + 1,
 *    (x) => x * 2,
 *    (x) => x * 3
 *  );
 *  const result = await pipeline(1); // result = 12
 * @author Mohammed Ali Agha <mtxshiftg@gmail.com>
 */
export const pipe = (...fns: Function[]): (initialValue: any) => Promise<any> => {
  /*
  For the unfortunate developer reading this code, the following is a brief explanation of what's going on.

  `pipe` takes any amount of functions and returns a new function that takes an argument and runs each function in order, 
  passing the result of the previous function as an argument to the next. The returned function is async to support the usage
  of async functions.
  */
  return async (initialValue: any): Promise<any> => {
    return await fns.reduce((currentValue, currentFunction) => {
      // If `currentValue` is a Promise, wait for it to resolve before passing it to the next function.
      if (typeof currentValue.then === "function") {
        return currentValue.then(currentFunction);
      }
      // Otherwise, pass the current value to the next function. 
      else {
        return currentFunction(currentValue);
      }
    }, initialValue);
  };
};

export default pipe;
