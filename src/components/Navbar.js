import React from "react";
import "../styles/navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      <p className="navTitle">Not a real store</p>
      <div className="navLinks">
        <div className="navLink">
          <p>Home</p>
          <div className="navLinkBar" />
        </div>
        <div className="navLink">
          <p>Our products</p>
          <div className="navLinkBar" />
        </div>
      </div>
    </div>
  );
}
