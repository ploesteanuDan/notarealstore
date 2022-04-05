import React from "react";
import "../styles/homeHero.scss";
import { CaretRight } from "phosphor-react";
import shoe from "../assets/pictures/shoe.png";
export default function HomeHero() {
  return (
    <div className="homeHero">
      <div className="text">
        <p className="title">Not a real store</p>
        <p className="description">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit.
        </p>
        <div className="button">
          <p>Shop now</p>
          <CaretRight size={17} />
        </div>
      </div>
      <div className="hLine" />
      <div className="picture">
        <div className="bar b1" />
        <div className="bar b2" />
        <div className="bar b3" />
        <img src={shoe} alt="notarealstore" />
      </div>
    </div>
  );
}
