import React from "react";
import "../styles/homeBar.scss";
import products from "../assets/json/products.json";
import Product from "./Product";
import allEditorials from "../assets/pictures/allEditorials.jpg";
import { CaretRight } from "phosphor-react";
export default function HomeBar() {
  return (
    <div className="homeBar">
      <div className="homeBarProducts">
        {products.products
          .slice(2, products.products.length)
          .map((product, index) => (
            <Product product={product} />
          ))}
        <div className="homeBarProductsTitle">
          <p>Top sellers</p>
        </div>
      </div>
      <div className="hLine" />
      <div className="homeAllEditorials">
        <img src={allEditorials} alt="notarealstore" />
        <span>
          <p>See our editorials</p>
          <CaretRight size={16} />
        </span>
      </div>
    </div>
  );
}
