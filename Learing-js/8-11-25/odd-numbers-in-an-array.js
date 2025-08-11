// problem one please give me a some the array  odd number

let number = [2, 25, 3, 6, 25, 25, 45, 59, 52, 92, 1, 57, 18];

function oddNumberAverage(number) {
  let oddNumber = [];
  for (const oddNumbers of number) {
    if (oddNumbers % 2 != 0) {
      oddNumber.push(oddNumbers);
    }
  }

  let sum = 0;
  for (let result of oddNumber) {
    sum = sum + result;
  }
  let avg = oddNumber.length;
  let finalResult = sum / avg;

  return finalResult;
}

let result = oddNumberAverage(number);
console.log(result);
