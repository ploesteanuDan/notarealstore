import React from "react";
import "../styles/navbar.scss";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  User,
  ShoppingBag,
  Storefront,
  HouseSimple,
} from "phosphor-react";
import { useStoreState } from "easy-peasy";
import postAction from "../handlers/postAction";
export default function Navbar() {
  let location = useLocation().pathname;
  const cart = useStoreState((state) => state.cart);
  return (
    <div className="navbar">
      <Link to={"/"}>
        <p className="navTitle">Not a real store</p>
      </Link>
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
              <HouseSimple size={27} />
            </p>
            {location === "/" && <div className="navLinkBar" />}
          </div>
        </Link>
        <Link to="/products">
          <div className="navLink">
            <p
              style={{
                color:
                  location === "/products" ? "var(--black)" : "var(--grey)",
              }}
            >
              <Storefront size={27} />
            </p>
            {location === "/products" && <div className="navLinkBar" />}
          </div>
        </Link>
        <Link
          to={"/shoppingbag"}
          onClick={() => {
            postAction(
              '[href="/shoppingbag"] > .navLink > :nth-child(1) > svg',
              "click",
              "",
              ""
            );
          }}
        >
          <div className="navLink">
            <p
              style={{
                color:
                  location === "/shoppingbag" ? "var(--black)" : "var(--grey)",
              }}
            >
              <ShoppingBag size={27} />
            </p>
            <p
              className="cartCounter"
              style={{
                color:
                  location === "/shoppingbag" ? "var(--black)" : "var(--grey)",
              }}
            >
              {cart.length <= 0 ? "" : cart.length}
            </p>
            {location === "/shoppingbag" && <div className="navLinkBar" />}
          </div>
        </Link>
        <Link
          to="/account"
          // onClick={() => {
          //   postAction(
          //     '[href="/account"] > .navLink > p > svg',
          //     "click",
          //     "",
          //     ""
          //   );
          // }}
        >
          <div className="navLink">
            <p
              style={{
                color:
                  location === "/account" || location === "/login"
                    ? "var(--black)"
                    : "var(--grey)",
              }}
            >
              <User size={27} />
            </p>
            {location === "/account" && <div className="navLinkBar" />}
          </div>
        </Link>
      </div>
    </div>
  );
}
