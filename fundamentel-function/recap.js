//  create a function that will be return only the even number
//  return the sum of even numbers

function evenNumberOnly(numbers) {
  let result = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      result.push(number);
    } else {
      return;
    }
  }
  return result;
}

const numbers = [6, 4, 5, 2, 5, 56, 45, 25, 546, 86, 45];
const finalResult = evenNumberOnly(numbers);
console.log(finalResult);
