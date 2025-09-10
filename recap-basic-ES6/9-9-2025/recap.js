//  var
// const
// let

const tax = 5000;
let eta = 5;
eta = 2;

const student = {
  name: "Rashedul islam",
  age: 23,
  marks: 65,
};

const personName = ["Hello", "world", "continue"];
function add(name, name2 = "Nothing") {}

// const dynamicText = `My Tax${tax} and marks : ${(marks = 50)} `;
// console.log(dynamicText);

//  arrow function
const add2 = (number, number2 = 123) => {
  return number + number2;
};

const temTime = (x) => x * 10;

//  spreed operator
const newFriend = [, "nothing", "Hello"];

// destructuring

const { marks, age, product = "NONE" } = student;

console.log(marks, age, product);

const [nameIs, responsibility] = personName;
console.log(nameIs, responsibility);
