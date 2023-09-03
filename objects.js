// Objects in javascript

const user = {
  name: "John",
  age: 35,
};
console.log(user); // { name: 'John', age: 35 }

// access property value
console.log(user.name); // John
console.log(user["name"]); // John

// update property value
user.name = "John Wick";
console.log(user); // { name: 'John Wick', age: 35 }

// delete property
delete user.age;
console.log(user); // { name: 'John Wick' }

// Q- What will be the output?
const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func); // 5
// We can only delete object properties and not variable

// Use dynamic property name and value
const property = "name";
const value = "Ben";
const student = {
  [property]: value,
};
console.log(student); // { name: 'Ben' }

// Iterate on object
const person = {
  name: "Nick",
  age: 40,
  gender: "Male",
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// name: Nick
// age: 40
// gender: Male

// Q- What's the output
const object = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(object); // { a: 'three', b: 'two' }
// repeated property replaces old value

// Q- Create a function that multiplies all numeric property values of obj by 2.
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};
function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
multiplyByTwo(nums);
console.log(nums); // { a: 200, b: 400, title: 'My nums' }

// Q- Find the output of the following code snippet.
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456
// Object keys are automatically converted into strings.
// We are trying to set an object as a key to object `a`, with the value of `123`.
// However, when we stringify an object, it becomes `"[object Object]"`.
// So what we are saying here, is that `a["[object Object]"] = 123`.
// Then, we can try to do the same again. `c` is another object that
// we are implicitly stringifying. So then, `a["[object Object]"] = 456`.
// Then, we log `a[b]`, which is actually `a["[object Object]"]`.
// We just set that to `456`, so it returns `456`.

// JSON.Stringify and JSON.parse
const car = {
  name: "McLaren",
  release: 2018,
};
const carStr = JSON.stringify(car);
console.log(carStr); // {"name":"McLaren","release":2018}
console.log(JSON.parse(carStr)); // { name: 'McLaren', release: 2018 }
// common application is to store data in local or session storage
// as data can be only stored as string

// Spread Oprator
const newUser = { name: "Lydia", age: 21 };
const admin = { admin: true, ...newUser };
console.log(admin); // { admin: true, name: 'Lydia', age: 21 }

// Q- What's the output
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); // {"level":19, "health":90}
// The second argument of `JSON.stringify` is the *replacer*.
// The replacer can either be a function or an array, and
// lets you control what and how the values should be stringified.
// If the replacer is an *array*, only the property names included
// in the array will be added to the JSON string. In this case,
// only the properties with the names `"level"` and `"health"`
// are included, `"username"` is excluded.
// If the replacer is a *function*, this function gets called
// on every property in the object you're stringifying.
// The value returned from this function will be the value of
// the property when it's added to the JSON string. If the value
// is `undefined`, this property is excluded from the JSON string.

// Q- What's the output
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN
// Note that the value of `diameter` is a regular function,
// whereas the value of `perimeter` is an arrow function.
// With arrow functions, the `this` keyword refers to its
// current surrounding scope, unlike regular functions!
// This means that when we call `perimeter`, it doesn't refer
// to the shape object, but to its surrounding scope (e.g. window).

// Destructuring and renaming
let newObj = {
  name: "Elon",
  age: 24,
  fullName: {
    first: "Elon",
    last: "Musk",
  },
};
const { name } = newObj;
console.log(name); // Elon
// nested destructuring
const {
  fullName: { last },
} = newObj;
console.log(last); // Musk
// renaming can be used when there is already a variable name
// present for the same property name
const { name: myName } = { name: "Lydia" };
console.log(myName); // Lydia

// Q- What's the output?
// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit];
// }
// SyntaxError ...args
// Rest oprator should always be last parameter
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}
console.log(getItems(["banana", "apple"], "pear", "orange"));
// [ 'banana', 'apple', 'orange', 'pear' ]

// Object Referencing
let x = { greeting: "Hey!" };
let y;
y = x;
x.greeting = "Hello";
console.log(y.greeting); // Hello
// In JavaScript, all objects interact by reference when setting them
// equal to each other. When you change one object, you change all of them.

console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false
// In JavaScript, Objects are compared based on references.
// In the above statement, we are comparing two different objects so their references
// will be different. Hence, we get the output as false for both of the statements.

// Referencing is not always there
let person1 = { name: "Lydia" };
const members = [person1];
person1 = null;
console.log(members); // [ { name: "Lydia" } ]
// When you assign a reference from one variable to another,
// you make a copy of that reference.

let person2 = { name: "Lydia" };
const members1 = [person2];
person2.name = null;
console.log(members1); // [ { name: null } ]
// Here it will affect the value inside the object

// Q- What's the output?
const val = { number: 10 };
const multiply = (x = { ...val }) => {
  console.log((x.number *= 2));
};
multiply(); // 20
multiply(); // 20
multiply(val); // 20
multiply(val); // 40

// Q- What's the output?
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };

  return person;
}
const personObj1 = {
  name: "Alex",
  age: 30,
};
const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // { name: 'Alex', age: 25 }
console.log(personObj2); // { name: 'John', age: 50 }
// The function first changes the property age on the original object it was passed in.
// It then reassigns the variable to a brand new object and returns that object.

// Shallow copy vs Deep copy

// A shallow copy means that certain (sub-)values
// are still connected to the original variable.
const user1 = {
  name: "Jen",
  age: 26,
};
const copyOfUser1 = user1;
console.log(user1); // { name: 'Jen', age: 26 }
copyOfUser1.age = 24;
// Here you would expect user object wouldn't change, but copyOfUser
// and user object both share same memory address
console.log(user1); // { name: 'Jen', age: 24 }

// A deep copy means that all of the values of the new variable
// are copied and disconnected from the original variable.
const user2 = {
  name: "Jen",
  age: 26,
};
console.log("=========Deep Copy========");
const copyOfUser2 = JSON.parse(JSON.stringify(user2));
console.log("User=> ", user2);
console.log("copyOfUser=> ", copyOfUser2);
/* =========Deep Copy========
User=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Jen', age: 26 } */
console.log("---------After modification---------");
copyOfUser2.name = "Piyush";
copyOfUser2.age = 24;
// Here user object will not change
console.log("User=> ", user2);
console.log("copyOfUser=> ", copyOfUser2);
/* ---------After modification---------
user=>  { name: 'Jen', age: 26 }
copyOfUser=>  { name: 'Piyush', age: 24 } */

// 4 ways to clone a object
const obj = { a: 1, b: 2 };
const objclone1 = Object.assign({}, obj);
const objclone2 = JSON.parse(JSON.stringify(obj));
const objclone3 = { ...obj };
console.log(objclone1); // { a: 1, b: 2 }
console.log(objclone2); // { a: 1, b: 2 }
console.log(objclone3); // { a: 1, b: 2 }
// Nested objects wont be cloned completely as inner object's reference will be stored
// Only objclone2 will deep clone here as it converts to string and back to object
// but JSON.stringify doesnt work on circular structure so use alternative given below

// structuredClone
// The call structuredClone(object) clones the object with all nested properties.
// Function properties aren’t supported.
let emp = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};
emp.itself = emp; // create circular reference
let clone = structuredClone(emp);
console.log(emp.sizes === clone.sizes); // false, different objects
// user and clone are totally unrelated now
emp.sizes.width = 60; // change a property from one place
console.log(clone.sizes.width); // 50, not related
console.log(clone.itself === clone); // circular reference is preserved
