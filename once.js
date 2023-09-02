function once(func, context) {
  let ran;
  return function (){
    if (func){
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  }
}

let hello = once(() => {
  console.log("hello");
  return "hi";
});
console.log(hello());
console.log(hello());
console.log(hello());
