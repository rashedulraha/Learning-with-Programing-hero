//! checking sum zero
//   [-5,-4,-3,-2,0,2,4,6,8] -> input
//?   [?,?]-> output

const input = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// function getSumZero(inputValue) {
//   for (let number of inputValue) {
//     for (let j = 1; j < inputValue.length; j++) {
//       if (number + inputValue[j] === 0) {
//         return [number, inputValue[j]];
//       }
//     }
//   }
// }

// const result = getSumZero(input);
// console.log(result);

// function getSumValue() {}

// const resultValue = getSumValue();
// console.log(resultValue);

// const input = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// function getSumZero(inputValue) {
//   for (let number of inputValue) {
//     console.log("Outer loop number : ", number);

//     for (let j = 1; j < inputValue.length; j++) {
//       console.log("inner loop index:", j, "=>", inputValue[j]);

//       if (number + inputValue[j] === 0) {
//         return [number, inputValue[j]];
//       }
//     }
//   }
// }

// const result = getSumZero(input);
// console.log(result);

// const input = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// function getSumZero(inputValue) {
//   for (let number of inputValue) {
//     console.log("Outer Loop number:", number);

//     for (let j = 1; j < inputValue.length; j++) {
//       console.log("   Inner Loop index:", j, "=>", inputValue[j]);

//       const sum = number + inputValue[j];
//       console.log("   Checking:", number, "+", inputValue[j], "=", sum);

//       if (sum === 0) {
//         console.log("Found pair:", number, inputValue[j]);
//         return [number, inputValue[j]];
//       }
//     }
//   }
// }

// const result = getSumZero(input);
// console.log("Result:", result);
