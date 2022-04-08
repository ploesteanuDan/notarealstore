import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import "../styles/productPage.scss";
import { CaretLeft, CaretRight, ShoppingBag } from "phosphor-react";
export default function ProductPage() {
  const productId = useParams().productId;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getproduct", {
        params: { id: productId },
      })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="productPage page">
      <Navbar />
      <div className="productPageLinks">
        <Link to={"/"}>
          <div>
            <CaretLeft size={17} />
            <p>Home</p>
          </div>
        </Link>
        <div>
          <p>Our products</p>
        </div>
      </div>
      {product && (
        <div className="productGrid">
          <div className="productInfo">
            <div className="productName">
              <p className="productProducer">{product.producer_name}</p>
              <p>{product.product_name}</p>
            </div>
            <div className="productDescription">
              <p>{product.description}</p>
            </div>
            <div className="productDropdown" />
            <div className="productDropdown" />
            <div className="line" />
            <div className="productPrice">
              <div className="price">
                <p>$</p>
                <p>{product.price}</p>
              </div>
              <div>
                <p>Free shipping over $150</p>
              </div>
            </div>
            <div className="productButtons">
              <div className="toPurchase">
                <p>Buy now</p>
                <CaretRight size={20} />
              </div>
              <div className="toBasket">
                <ShoppingBag size={23} />
              </div>
            </div>
          </div>
          <div className="productPictures">
            {product.pictures.map((picture, index) => (
              <div
                style={{
                  backgroundImage: `url(${picture.product_picture_url})`,
                }}
                id={"picture" + index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
