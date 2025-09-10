const array = [10, 20, 30, 30, 40, 50, 60, 70, 80, 90];
// const [ten, tenNumber] = array;
// console.log(typeof ten, tenNumber);

const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 30,

  personalInfo: {
    name: "rashedul islam",
    overAge: 23,
  },

  introduce: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

const {
  firstName,
  age,
  introduce: { name, overAge },
} = person;
console.log(firstName, age, name, overAge);
