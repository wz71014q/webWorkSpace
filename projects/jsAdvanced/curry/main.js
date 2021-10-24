const curry = (fn, ...args) => {
  if (args.length < fn.length) {
    return (...params) => curry(fn, ...args, ...params);
  }
  return fn(...args);
};
function sumFn(a, b, c) {
  return a + b + c;
}
const sum = curry(sumFn);
console.log(sum(1)(2)(3));
