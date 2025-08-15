const product = [
  {
    name: "shampoo",
    price: 300,
  },
  {
    name: "shope",
    price: 100,
  },
  {
    name: "shirt",
    price: 700,
  },
  { name: "pant", price: 1000 },
];

//  ! actual product total

function getShoppingTotal(products) {
  let totalShopping = 0;
  for (const product of products) {
    // totalShopping += product.price;
    totalShopping = totalShopping + product.price;
  }

  return totalShopping;
}
let result = getShoppingTotal(product);
console.log(`Your total price is ${result}`);
