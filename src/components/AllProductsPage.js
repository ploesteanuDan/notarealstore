import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Product from "./Product";
import { MagnifyingGlass, Sliders } from "phosphor-react";
import "../styles/allProductsPage.scss";
export default function AllProductsPage() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getallproducts")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="allProducts page">
      <Navbar />
      <div className="filterBar">
        <div className="search">
          <MagnifyingGlass size={23} />
          <input placeholder="Search" />
          <div className="searchLine" />
        </div>
        <div className="filters">
          <Sliders size={23} />
        </div>
      </div>
      <div className="productsGrid">
        {products &&
          products.map((product, index) => <Product product={product} />)}
      </div>
    </div>
  );
}
