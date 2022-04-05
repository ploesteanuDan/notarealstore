import React from "react";
import products from "../assets/json/products.json";
import Product from "../components/Product";
import { CaretRight } from "phosphor-react";
import "../styles/homeProducts.scss";
export default function HomeProducts() {
  return (
    <div className="homeProducts">
      <div className="homeProductsProducts">
        {products.products.map((product, index) => (
          <Product product={product} />
        ))}
      </div>
      <div className="homeProductsLink">
        <p>Shop now</p>
        <CaretRight size={17} />
      </div>
      <div className="vLine vl1" />
      <div className="vLine vl2" />
    </div>
  );
}
