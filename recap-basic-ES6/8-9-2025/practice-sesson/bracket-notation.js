// const name = "Hello";
// console.log(person[name]);

// key

let name = " rashedul islam";
let age = 21;
let person = {
  name,
  age,
  roll: 29,
  getInfo() {
    console.log(`name is ${person.name}`);
  },
};

const keys = Object.keys(person);
console.log(keys);

// const entries = Object.entries(person);
// console.log(entries);

//  loop iterate    - two way

// const parentDiv = document.getElementById("Nothing");

// for (let key of keys) {
//   const divCreate = document.createElement("div");
//   divCreate.innerHTML = `<span>${key}</span>`;
//   console.log(divCreate);

//   parentDiv.appendChild(divCreate);
// }
