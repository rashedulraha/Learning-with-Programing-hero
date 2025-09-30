import React from "react";

const ProductForm = ({ handleAddProduct }) => {
  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const newProduct = {
      name,
      price,
      quantity,
    };
    handleAddProduct(newProduct);
  };
  return (
    <div>
      <h3 className="text-2xl font-bold  mt-5 capitalize">
        add a new product{" "}
      </h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product quantity" />

        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default ProductForm;
