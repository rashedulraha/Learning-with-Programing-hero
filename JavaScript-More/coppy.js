// const price = 25;
// const comPrice = 25;

// console.log(price);
// console.log(comPrice);

let a = 1;
let b = a;
b = 2;
// console.log(a);
// console.log(b);

// let personalName = {
//   name: "Rashedul islam",
// };
// let personName2 = personalName;
// personName2.name = "Abdullah";
// console.log(personalName);
// console.log(personName2);

//  ! Bad practice array to copy array
// const number = [1, 2, 3];
// const copy = number;
// copy.push(12);
// console.log(number);
// console.log(copy);

// ! copy array to Using slice()

// const number = [1, 2, 3];
// const copyNumber = number.slice();

// copyNumber.push(23);
// console.log(number);
// console.log(copyNumber);

//  ! copy array to using spreed
// const mainNumber = [3, 5, 4, 5];
// const resultMainNumber = [...mainNumber];
// resultMainNumber.push(12);

// console.log(mainNumber);
// console.log(resultMainNumber);

// ! copy array to using array.form()jj

// const number = [45, 46, 47];
// const mainResultNumber = Array.from(number);

// mainResultNumber.unshift(12);
// console.log(number);
// console.log(mainResultNumber);
//  ! but more solution shallow copy vs deep copy

// const nested = [
//   [1, 2],
//   [2, 3],
// ];

// const copy = [...nested];

// copy.push([1, 2, 3]);

// console.log(nested);
// console.log(copy);

// const nested = [
//   [1, 2],
//   [3, 4],
// ];

// const copy = [...nested];

// copy[0][0] = 999;
// console.log(nested);
// console.log(copy);

//   ! copy array to array using deep()

// let numberArray = [
//   [1, 2],
//   [3, 5],
// ];

// const deepCopy = JSON.parse(JSON.stringify(numberArray));
// console.log(numberArray);

// deepCopy[0][0] = 11;
// console.log(deepCopy);

//  ! practice question

const newArray = [12, [13, 14, [15, 16], [15, 6]], 15, 16, 16];
const deepCopy = JSON.parse(JSON.stringify(newArray));
newArray[1][3][1] = 7;
deepCopy[1][3][1] = 12;

console.log(newArray);
console.log(deepCopy);
