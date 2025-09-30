import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProduct] = useState([]);

  const handleAddProduct = (product) => {
    const newProducts = [...products, product];
    setProduct(newProducts);
  };
  return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductManagement;
