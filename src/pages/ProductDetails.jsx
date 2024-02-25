import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id: product_id } = useParams();
  const [product, setProduct] = useState({});

  const get_product = async () => {
    const res = await fetch(`http://localhost:3030/api/product/${product_id}`);
    const data = await res.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    // get product from backend
    get_product();
  }, []);

  console.log(product_id);
  return (
    <div style={styles.container}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={styles.image} />

      <p>{product.description}</p>
      <h3>£{product.price}</h3>
      <a href={product.link}>link to website</a>
    </div>
  );
};

// add styling to image to make it smaller

const styles = {
  container: {
    display: "flex",
    flexFlow: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: "10px",
    boxSizing: "border-box",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};

export default ProductDetails;
