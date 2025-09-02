const number = [4, 5, 8, 2, 6, 5, 2, 5, 3, 6];

// let sum = 0;
// for (let result of number) {
//   sum = sum + result;
// }
// console.log(sum);

const result = number.reduce((acc, curr) => {
  return acc + curr;
});

console.log(result);
