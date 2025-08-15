const productDetails = [
  { name: "shampoo", price: 250, quantity: 2 },
  { name: "shope", price: 50, quantity: 5 },
  { name: "pant", price: 1000, quantity: 2 },
  { name: "shirt", price: 500, quantity: 1 },
];

function getShoppingPrice(products) {
  let totalProductPrice = 0;

  for (const product of products) {
    let price = product.price * product.quantity;
    totalProductPrice = totalProductPrice + price;
  }
  return totalProductPrice;
}

let result = getShoppingPrice(productDetails);
console.log(result);
