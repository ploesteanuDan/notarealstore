import React from "react";
import "../styles/homeEditorials.scss";
import editorials from "../assets/json/editorials.json";
export default function HomeEditorials() {
  return (
    <div className="homeEditorials">
      {editorials.editorials.map((editorial, index) => (
        <img
          key={index}
          id={"pic" + index}
          src={editorial.picture}
          alt="notarealstore"
        />
      ))}
      <div className="homeEditorialsLabel">
        <p>EDITORIALS</p>
      </div>
    </div>
  );
}
