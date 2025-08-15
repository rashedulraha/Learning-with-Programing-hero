/*
 * create function that will return  only the even number
 * return the sum of even number
 */

function onlyEvenNumber(numbers) {
  const result = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      // console.log(number);
      result.push(number);
    }
  }
  return result;
}

const numbers = [5, 56, 62, 48, 0, 2, 5, 84, 36, 38, 44, 54, 6];
const finalResult = onlyEvenNumber(numbers);
console.log(finalResult);
