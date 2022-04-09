import React from "react";
import "../styles/navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { List, User, ShoppingBag } from "phosphor-react";
export default function Navbar() {
  let location = useLocation().pathname;

  return (
    <div className="navbar">
      <p className="navTitle">Not a real store</p>
      <div className="navHamburger">
        <List size={25} />
      </div>
      <div className="navLinks">
        <Link to={"/"}>
          <div className="navLink">
            <p
              style={{
                color: location === "/" ? "var(--black)" : "var(--grey)",
              }}
            >
              Home
            </p>
            {location === "/" && <div className="navLinkBar" />}
          </div>
        </Link>
        <div className="navLink">
          <p
            style={{
              color: location === "/products" ? "var(--black)" : "var(--grey)",
            }}
          >
            Our products
          </p>
          {location === "/products" && <div className="navLinkBar" />}
        </div>
        <Link to={"/shoppingbag"}>
          <div className="navLink">
            <ShoppingBag size={27} />
          </div>
        </Link>
        <div className="navLink">
          <User size={27} />
        </div>
      </div>
    </div>
  );
}
