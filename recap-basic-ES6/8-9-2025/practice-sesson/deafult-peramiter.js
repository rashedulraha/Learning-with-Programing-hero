const myFunction = (name, age = 23) => {
  console.log(`your name is ${name} and your age is ${age + 2}`);
};

myFunction("name", 20);
