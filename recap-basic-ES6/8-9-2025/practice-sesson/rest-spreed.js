//   rest and spreed operator

// first rest operator

// const myFunction = (a, b, ...rest) => {
//   console.log(a + b);
//   console.log(rest);
// };

// myFunction(12, 2);
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
fruits.forEach((item) => {
  console.log(`<span class="btn">${item}</span>`);
});

const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 30,

  introduce: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

const person2 = { ...person };

person2.firstName = "Rashedul islam";
console.log(person2);

console.log(person);
