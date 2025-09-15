const handleProduct = () => {
  const product = document.getElementById("product");
  const quantity = document.getElementById("quantity");
  const productValue = product.value;
  const quantityValue = quantity.value;
  displayProduct(productValue, quantityValue);
  addProductToCart(productValue, quantityValue);
  console.log("product add", productValue, quantityValue);

  product.value = "";
  quantity.value = "";
};

const getCart = () => {
  const cart = {};
  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();
  cart[product] = quantity;
  console.log("cart", cart);
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerHTML = `Your product name is <span class="strong">${product}</span> and your product quantity is <span class="strong">${quantity}</span>`;

  const ListAdd = document.getElementById("listAdd");
  ListAdd.appendChild(li);
};
