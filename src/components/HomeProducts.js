import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { CaretRight } from "phosphor-react";
import axios from "axios";
import "../styles/homeProducts.scss";
export default function HomeProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getlast4products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="homeProducts">
      <div className="homeProductsProducts">
        {products &&
          products.map((product, index) => (
            <div key={index}>
              <Product product={product} />
            </div>
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
