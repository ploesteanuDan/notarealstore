import React from "react";
import "../styles/product.scss";
import dummypic from "../assets/pictures/shoe.png";
export default function Product(props) {
  return (
    <div className="product">
      <div className="picContainer">
        <img src={dummypic} alt={props.product.name} />
      </div>
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
