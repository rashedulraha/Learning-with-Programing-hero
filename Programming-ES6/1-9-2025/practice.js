// question one
const numbers = [2, 4, 6, 8, 10];

const newArray = numbers.map((number) => {
  return number * 2;
});
// console.log(numbers);

// console.log(newArray);

// question 2

const ages = [12, 25, 8, 19, 30, 15];

const overAge = ages.filter((age) => {
  return age > 18;
});

// console.log(overAge);

// ! user find method

const users = [
  {
    id: 1,
    name: "Rasheul islam",
  },
  {
    id: 2,
    name: "akash",
  },
  {
    id: 3,
    name: "siam",
  },
];

let result = users.find((user) => {
  return user.name === "akash";
});
// console.log(result);

//   forEach method
const fruits = ["Mango", "Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  // console.log(fruit);
});

// question number 4

const students = [
  { id: 1, name: "Rashed", age: 17, marks: 85 },
  { id: 2, name: "Akash", age: 20, marks: 45 },
  { id: 3, name: "Siam", age: 19, marks: 72 },
  { id: 4, name: "Nadim", age: 22, marks: 33 },
  { id: 5, name: "Rakib", age: 18, marks: 90 },
];

const filterUsing = students.filter((student) => {
  return student.marks > 50;
});

const mapUsing = filterUsing.map((student) => {
  return student.name;
});

// console.log(mapUsing);

//   ! using find method
const findUsing = filterUsing.find((student) => {
  const result = student.name === "Rakib";
  return result;
});

// console.log(findUsing);

//  ! printing name and marks using forEach method

// const forEachUsing = students.forEach((name) => {
//   let userName = name.name;
//   let userMark = name.marks;

//   console.log(userName);
//   console.log(userMark);
// });

// const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a + b);

// const { x, y, z } = { x: 1, y1: 2, z: 3 };
// console.log(y);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);
