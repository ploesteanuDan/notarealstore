import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postAction from "../handlers/postAction";
import "../styles/product.scss";
export default function Product(props) {
  return (
    <div data-testid="productContainer">
      {props.product && (
        <Link
          to={"/product/" + props.product.product_variation_id}
          className={"prodBtn" + props.product.product_variation_id}
          onClick={() => {
            postAction(".prodBtn1", "click", "", "");
          }}
        >
          <div className="product" data-testid="product">
            <div className="picContainer">
              <img
                src={props.product.product_picture_url}
                alt={props.product_name}
              />
            </div>
            <span>
              <div className="left">
                <p className="producer">{props.product.producer_name}</p>
                <p className="name">{props.product.product_name}</p>
              </div>
              <div className="right">
                <p>$</p>
                <p>{props.product.price}</p>
              </div>
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
