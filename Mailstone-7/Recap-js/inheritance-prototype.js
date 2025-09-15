const p1 = {
  Fname: "Hello",
  lName: "world",

  getFullName() {
    return `My full name is ${this.Fname} and my last name is ${this.lName}`;
  },
};

console.log(p1);

const p2 = Object.create(p1);
console.log(p2);
