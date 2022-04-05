import React from "react";
import "../styles/homeBar.scss";
import products from "../assets/json/products.json";
import Product from "./Product";
export default function HomeBar() {
  return (
    <div className="homeBar">
      <div className="homeBarProducts">
        {products.products.map((product, index) => (
          <Product product={product} />
        ))}
        <div className="homeBarProductsTitle">
          <p>Top sellers</p>
        </div>
      </div>
    </div>
  );
}
