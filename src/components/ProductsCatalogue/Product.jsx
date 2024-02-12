import React from "react";
import "./ProductStyles.css";

const Product = (prop) => {
  const { product } = prop;

  return (
    <div className="product-container">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
