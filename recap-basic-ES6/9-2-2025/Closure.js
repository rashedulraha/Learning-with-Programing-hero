//!  closure
// function container() {
//   let count = 0;
//   function innerFunction() {
//     console.log("inside a inner  function , some one call me  ");
//     return 0;
//   }
//   return innerFunction;

// }

// const result = container();
// console.log(result());

//   ! example 2

function counter() {
  let count = 10;
  return function () {
    let count = count + 10;
    return count;
  };
}

const result = counter();
console.log(result());
