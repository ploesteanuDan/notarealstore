import React from "react";
import products from "../assets/json/products.json";
import Product from "../components/Product";
import "../styles/homeProducts.scss";
export default function HomeProducts() {
  return (
    <div className="homeProducts">
      {products.products.map((product, index) => (
        <Product product={product} />
      ))}
    </div>
  );
}
