import React from "react";
import Product from "./Product";

const Products = (props) => {
  const { products } = props;

  const productHtml = products.map((product) => (
    <Product key={product.name} product={product} />
  ));

  return (
    <>
      <div>Products</div>
      <div className="products-container">{productHtml}</div>
    </>
  );
};

export default Products;
