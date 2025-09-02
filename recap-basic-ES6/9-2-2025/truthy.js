let data;
data = 0;
data = ""; // empty string is falsy
data = " "; // has an white space
data = false;
data = true;
data = [];
data = {};
data = true;
data = function () {};
// console.log(" value of data", data);

// if (data) {
//   console.log("value of data is truthy");
// } else {
//   console.log(data, "value of data is falsy ");
// }

//! if i need to capture  false value to go inside the block

// if (!data) {
//   console.log("this is value is false ", data);
// } else {
//   console.log("nothing");
// }

//  ! capture all positive value
//! double not
//!  capture any value to

// if (!!data === true) {
//   console.log("Only true inside  the double not ");
// } else {
//   console.log("This is falsy value inside ");
// }

// if (data) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log(!true);
// console.log(!false);
// console.log(!"Hello");
// console.log(!"");

// console.log(!!"0");
// console.log(!!0);
// console.log(!![]);
// console.log(!!{});
// console.log(!!null);

// if (!"Hello") {
//   console.log("A");
// } else {
//   console.log("B");
// }

// function isTruthy(value) {
//   if (value) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return 0;
// }

// console.log(isTruthy("Hi")); // ?
// console.log(isTruthy("")); // ?
// console.log(isTruthy(123)); // ?
// console.log(isTruthy(0)); // ?
