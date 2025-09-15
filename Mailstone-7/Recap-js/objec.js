// const person = {
//   name: "Alice",
//   age: 25,
//   city: "Dhaka",
// };

// const keys = Object.entries(person);
// console.log(keys);

let person = {
  name: "Rahim",
  age: 25,
};

// for (let key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

// for (let result of person) {
//   console.log(result);
// }

// const arrow = [12, 12, 4, 13, 5, 4, 5644, 44654, 4131, 13, 13];

// for (let result of arrow) {
//   console.log(result * 23);
// }

// const optionalChaining = {
//   name: "Rahim",
//   address: {
//     city: "dhaka",
//     state: "bonani",
//   },
// };

// console.log(optionalChaining.address.name?.age);

//  access object using dot notation and brackets

// console.log(car["background-color"]);
// console.log(car.start());

// const number = [465, 5, 44, 64, 3, 4, 34, 6, 54, 6, 5, 3, 465, 465, 4, 4, 4];

// number.map((item) => {
//   console.log(item * 2);
// });

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  "background-color": "red",
  start: function () {
    console.log(`${this.brand} ${this.model} is starting...`);
    return 0;
  },
  drive: function (speed) {
    console.log(`${this.brand} ${this.model} is driving at ${speed} km/h`);
  },
};

// // Object entries array তে পরিণত করা ([key, value] pairs)
// let entries = Object.entries(car);

// let newEntries = entries.map(([key, value]) => {
//   if (typeof value === "string") {
//     return [key, value.toUpperCase()];
//   }
//   return [key, value];
// });

// // আবার object এ convert করা
// let newCar = Object.fromEntries(newEntries);

// console.log(newCar);

Object.entries(car).map((k, v) => {
  let value = k;
  console.log(value);
});
