// const value = 12;
// console.log(value);

// check();
// function check() {
//   console.log("say hello");
// }

// console.log(age); // ReferenceError: Cannot access 'age' before initialization
// let age = 45;

//  closure  function
// function outer() {
//   let name = "Rashedul islam";

//   function inner() {
//     console.log("Hello " + name);
//   }
//   return inner;
// }

// const result = outer();

// result();

// practice project with closure

// Counter App (with Closure)

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }

// createCounter()
// const counter = createCounter();

// const display = document.getElementById("display");
// const button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   const newCount = counter(); // inner function count
//   display.textContent = newCount;
// });
