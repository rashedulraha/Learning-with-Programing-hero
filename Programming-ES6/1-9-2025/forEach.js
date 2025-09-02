// .map()

const numbers = [1, 25, 3, 4, 5, 6, 7, 8, 9];
// const number = numbers.map((number) => {
//   return number * number;
// });

// // console.log(number);

// //  forEach()

// // numbers.forEach((number) => {
// //   const result = number * number;
// //   console.log(result);
// // });

// const result = numbers.filter((number) => {
//   const result = number >= 10;
//   return result;
// });

// console.log(...result);

// const evenNumber = numbers.filter((number) => {
//   let result = number % 2 === 0;
//   return result;
// });
// const result = evenNumber;
// console.log(result);

// find number
const evenNumber = numbers.find((number) => {
  let result = number % 2 === 0;
  return result;
});

console.log(evenNumber);
