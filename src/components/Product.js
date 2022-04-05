import React from "react";
import "../styles/product.scss";
export default function Product(props) {
  return (
    <div className="product">
      <img src={props.product.picture} alt={props.product.name} />
      <span>
        <div className="left">
          <p className="producer">{props.product.producer}</p>
          <p className="name">{props.product.name}</p>
        </div>
        <div className="right">
          <p>$</p>
          <p>{props.product.price}</p>
        </div>
      </span>
    </div>
  );
}
