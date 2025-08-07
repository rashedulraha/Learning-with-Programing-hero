// const fruits = ["apple", "Banana", "anar", "WaterMelon", "Orange"];

const number = [1, 2, 3, 4, 5, 6];

const revers = [];
const revers2 = [];
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
  revers.push(number[i]);
  revers2.unshift(number[i]);
}

console.log(revers);
console.log(revers2);
