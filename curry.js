function curry(func) {
  return function curried(...args) {
    if (func.length !== args.length){
      return function (...next) {
        return curried(...args, ...next);
      }
    }
    return func(...args);
  }
}

const sum = (a, b, c ,d) => a + b + c + d;

const totalSum = curry(sum);
console.log(totalSum(1)(2)(3)(4));
