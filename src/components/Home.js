import React from "react";
import "../styles/home.scss";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import HomeBar from "../components/HomeBar";
export default function Home() {
  return (
    <div className="home page">
      <Navbar />
      <HomeHero />
      <HomeBar />
    </div>
  );
}
