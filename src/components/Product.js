import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/product.scss";
export default function Product(props) {
  return (
    <Link to={"/product/" + props.product.product_variation_id}>
      <div className="product" data-testid="p1">
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
  );
}
