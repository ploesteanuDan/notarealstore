import React from "react";
import "../styles/home.scss";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
export default function Home() {
  return (
    <div className="home page">
      <Navbar />
      <HomeHero />
    </div>
  );
}
