function memoise(fn, context) {
  const res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    console.log(res);
    return res[argsCache];
  };
}

const fibo = (pos) => {
  if (pos < 2) return pos;
  return fibo(pos - 1) + fibo(pos - 2);
};

const memoizedFibo = memoise(fibo);
console.log(memoizedFibo(40));
console.log(memoizedFibo(40));
console.log(memoizedFibo(42));
console.log(memoizedFibo(42));
