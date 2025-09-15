// function Nothing(parameters) {
//   //  code
//   return value; // optional
// }

// const namePrint = (name) => {
//   console.log(`Hello ${name}`);
// };

// namePrint("Rashedul islam");
// namePrint(`Hello abdullah`);

//!  destructuring
const person = {
  name: "Rashedul islam",
  age: 32,
  isHappy: true,
  job: false,
};

const personArrow = ["Hello", "nothing", "js"];

const { name, age, isHappy, job } = person;
console.log(age);

const [first, second, third] = personArrow;
console.log(first, second, third);

// export const Result = () => {
//   Hello world
// };
