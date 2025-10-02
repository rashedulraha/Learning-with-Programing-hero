import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h2 className="mt-5 font-bold text-2xl"> Product : {products.length}</h2>

      <table>
        <th> No: </th>
        <th> Product name : </th>
        <th>price</th>
        <th>Quantity </th>
        <th>Action</th>
      </table>

      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{index}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default ProductTable;
