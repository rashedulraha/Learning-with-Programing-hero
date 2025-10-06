// const myFunction = () => {
//   console.log(this);
// };

const { useLayoutEffect } = require("react");

// myFunction();

// function thisKeyword() {
//   console.log(this);
// }
// thisKeyword();

// function nothing(name = "rashed ", age = 21) {
//   this.name = name;
//   this.age = age;

//   const personalInfo = name + age;
//   return personalInfo;
// }

// const result = nothing();
// console.log(result);

// rest and spreed operator

//  rest operator
// const findMaxNumber = (...rest) => {
//   const maxNumber = Math.max(...rest);
//   console.log(maxNumber);
// };

// findMaxNumber(10, 565, 25, 65, 565, 4445, 2, 5, 65, 56);

// object
// const obj = {
//   name: "Hello",
//   age: 21,
// };

// console.log(obj);

// const obj2 = { ...obj, designation: "developer" };
// console.log(obj2);

// const newArr = [12, 20, 21, 412, 5, 6];

// const [one, two, , , five, ...rest] = newArr;
// console.log(one, two, five, rest);

// const personInfo = {
//   name: "hello",
//   age: 21,
//   roll: 23,
//   address: {
//     city: "dhaka",
//     country: "bangladesh",
//   },
// };

// const {
//   name,
//   age,
//   address: { city, country },
// } = personInfo;

// console.log(name, age, city, country);

// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// // Call the function
// greet("Arafat", sayBye);

const arr = [4, 5, 5, 5, 5, 1, 45, 5];
// for (const item of arr) {
//   // console.log(item);
// }

// arr.forEach((item) => {
//   // console.log(item);
// });

// using map method

// const newArray = [];
// const update = arr.map((item) => {
//   let result = item + 5;
//   newArray.push(result);
// });

// newArray.filter((i) => {
//   const item = i > 10;
//   console.log(item);
// });

// let summation = arr.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0);

// console.log(summation);

// const arr = [1, 45, 34, 34, 3, 435, 34, 4, 55, 4, 545, 45, 4];

// const result = arr.reduce(function (accumulator, current) {
//   return accumulator + current;
// }, 0);

// console.log(result);

const student = {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  },
};
