const arrow = [
  {
    name: "Mobile",
    brand: "samsung",
    price: 30000,
    color: "black",
  },
  {
    name: "apple",
    brand: "apple",
    price: 50000,
    color: "red",
  },
  {
    name: "apple",
    brand: "apple",
    price: 50000,
    color: "black",
  },
  {
    name: "apple",
    brand: "apple",
    price: 50000,
    color: "black",
  },
  {
    name: "apple",
    brand: "apple",
    price: 50000,
    color: "greed",
  },
];

// const result = arrow.map((item) => {
//   return item.brand;
// });

// console.log(result);

const result = arrow.filter((item) => {
  return item.color === "black";
});

console.log(result);
