//   function definition

const { useLayoutEffect } = require("react");

//  function invoking
//  function parameter / arguments
//  return result from  function

//  what is function
//  function  is first cls citizen
//  we can treat  function as value
//

// function testFunction() {
//   console.log("i'm a test function");
// }

// const fn = testFunction;
// console.log(fn());

//   function construct  a function
// new function ();
// function srtToString(str) {
//   //  actual code
//   let obj = {};
//   for (let s of str) {
//     obj[s] = s;
//   }

//   return obj;
// }
// srtToString("Rashedul islam");

function strToObjWithCount(str) {
  let obj = {};
  for (let s of str) {
    obj[s] = (obj[s] || 0) + 1;
  }
  return obj;
}
strToObjWithCount("Rashedul islam");
