// const value = 12;
// console.log(value);

// check();
// function check() {
//   console.log("say hello");
// }

// console.log(age); // ReferenceError: Cannot access 'age' before initialization
// let age = 45;

// const display = document.getElementById("display");
// const btn = document.getElementById("btn");

// const counter = () => {
//   let countValue = 0;

//   return function count() {
//     return countValue++;
//   };
// };

// const functionCounter = counter();

// btn.addEventListener("click", () => {
//   const countValue = functionCounter();
//   display.innerText = countValue;
// });

// async function greet() {
//   return "Hello async";
// }

// const result = greet();
// const promise = result.then((res) => {
//   console.log(res);
// });

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncDemo() {
  console.log("Start");
  // await wait(2000); // 2 seconds pause
  console.log("End after 2 seconds");
}

asyncDemo();
