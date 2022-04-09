import React from "react";
import Navbar from "./Navbar";
import "../styles/bagPage.scss";
import { CaretRight } from "phosphor-react";
export default function BagPage(props) {
  return (
    <div className="bag page">
      <Navbar />
      <div className="bagGrid">
        <div className="bagForm">
          <p className="bagTitle">One more step</p>
          <p className="description">
            Fill in with your personal data and move to the payment process with
            Stripe
          </p>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />
          <div className="line" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Adress" />
          <input type="text" placeholder="Adress (optional)" />
          <div className="line" />
          <div className="button">
            <p>To Stripe payment</p>
            <CaretRight size={17} />
          </div>
        </div>
        <div className="bagProducts">
          <p className="bagTitle">Your shopping bag</p>
          <p className="description">
            These are all the products stored in your bag. One more step and
            they're all yours!
          </p>

          <div className="products">
            {props.products &&
              props.products.map((product) => (
                <div className="product">
                  <div className="productContent">
                    <img src={product.picture} alt={product.product_name} />
                    <div>
                      <p>{product.producer_name}</p>
                      <p>{product.product_name}</p>
                    </div>
                    <div>
                      <p>Size</p>
                      <p>{product.size}</p>
                      <p>US</p>
                    </div>
                    <div>
                      <p>$</p>
                      <p>{product.price}</p>
                    </div>
                  </div>
                  <div className="line" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
