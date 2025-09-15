//   using spreed operator

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr5 = [0, ...arr1, 0, ...arr3];
// console.log(arr5);

// ! copy object

// const person = {
//   name: "Rashedul islam",
// };

// const UpdatePerson = {
//   ...person,
//   age: 21,
// };

// console.log(UpdatePerson);
// console.log(person);

// const result = [2323, 3, 6, 5465, 464, 654, 4, 4, 465, 4];
// const finalResult = Math.max(...result);
// console.log(finalResult);

//  object destructuring and use case
// const personInfo = {
//   name: "Rashedul islam",
//   age: 45,
//   job: "frontend developer",
// };

// !  destructuring normal way

// const name1 = personInfo.name;
// const age1 = personInfo.age;
// const job1 = personInfo.job;

//!  destructuring way to  object
// const { name, age, job } = personInfo;
// console.log(name, age, job);

// more advance destructuring js
// const user = {
//   name: "Nothing",
//   age: "i don't know",
//   position: "header",
// };

// const MainUser = {
//   UserName: "rashedul islam",
//   email: "rashedulislam@nothing.js",
// };

// const { UserName, email } = MainUser;
// console.log(UserName, email);

// ! Renaming variable

// const result = {
//   id: 12,
//   price: 250,
// };

// const { id: productID, price: productPrice } = result;
// console.log(productID, productPrice);

//  destructuring default value set and use
const studentName = {
  name: "Rashedul islam",
};

const { name, roll = 12 } = studentName;
