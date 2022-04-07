import React, { useState, useEffect } from "react";
import "../styles/homeBar.scss";
import Product from "./Product";
import allEditorials from "../assets/pictures/allEditorials.jpg";
import { CaretRight } from "phosphor-react";
import axios from "axios";

export default function HomeBar() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getfeatured")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="homeBar">
      <div className="homeBarProducts">
        {products &&
          products.map((product, index) => (
            <div key={index}>
              <Product product={product} />
            </div>
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
      <div className="vLine vl1" />
      <div className="vLine vl2" />
    </div>
  );
}
