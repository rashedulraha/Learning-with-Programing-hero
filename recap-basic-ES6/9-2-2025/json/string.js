// console.log("api");

// const personInformation = {
//   name: "selim",
//   fruit: "Dalim",
//   dish: "Halim",
//   friend: ["halim", "kolim", "Hello", "Nothing"],
//   isRich: false,
//   money: 300000,
// };
// console.log(personInformation, typeof personInformation);

// const stringFy = JSON.stringify(personInformation);
// console.log(stringFy, typeof stringFy);

//   string to object

// const convertObject = JSON.parse(stringFy);
// console.log(convertObject, typeof convertObject);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
