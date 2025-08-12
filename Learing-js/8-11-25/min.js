const numbers = [
  122323223000, 125555, 23240544, 4556560, 4541411, 4311440, 6454141, 50145664,
  1143134, 6432434, 6514132, 65413, 4414113, 1343154, 31414124, 1414234, 513464,
  32134651, 4653564, 46232512, 1234654,
];

let min = Math.min(...numbers);
let max = Math.max(...numbers);

const finalResult = (min * max) / 2;
console.log(min);
console.log(max);
console.log(finalResult);

function minNumber(number) {
  let minResult = number[0];
  for (const min of number) {
    if (min < minResult) {
      minResult = min;
    }
  }
  return minResult;
}

const result = minNumber(numbers);
// console.log(result);
