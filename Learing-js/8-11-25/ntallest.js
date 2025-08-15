const heights = [65, 64, 68, 69, 78, 25, 65, 15];

//  function
function getMaxValue(numbers) {
  let firstValue = numbers[0];
  for (let num of numbers) {
    if (num < firstValue) {
      firstValue = num;
    }
  }

  return firstValue;
}

const result = getMaxValue(heights);
console.log(result);
