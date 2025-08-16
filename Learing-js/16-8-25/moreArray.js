// const number = [12, 45, 6, 56, 12, 545, 32, 3];

// for (let i = 0; i < number.length; i++) {
//   const numbers = number[i];
//   // console.log(numbers);
// }

// for (let moreNumber of number) {
//   console.log(moreNumber);
// }

const products = [
  {
    id: 1,
    name: "i phone",
    price: 19000,
  },
  {
    id: 1,
    name: "xiaomi phone one night",
    price: 19000,
  },
  {
    id: 1,
    name: "mac book pro air ",
    price: 19000,
  },
  {
    id: 1,
    name: "lenovo yoga laptop 2025",
    price: 19000,
  },
  {
    id: 1,
    name: "Dell inspiron laptop",
    price: 19000,
  },
  {
    id: 1,
    name: "samsung note 7 pro",
    price: 19000,
  },
  {
    id: 1,
    name: "nokia old age Phone gone",
    price: 19000,
  },
  {
    id: 1,
    name: "walton phone",
    price: 19000,
  },
];

// for (const product of products) {
//   console.log(product);
// }

function matchProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchProducts(products, "laptop");
console.log(result);
