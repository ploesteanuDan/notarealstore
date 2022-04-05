import React from "react";
import "../styles/homeEditorials.scss";
import editorials from "../assets/json/editorials.json";
export default function HomeEditorials() {
  return (
    <div className="homeEditorials">
      <img
        id="pic0"
        src={editorials.editorials[0].picture}
        alt="notarealstore"
      />
      <div className="hLine" />
      <img
        id="pic1"
        src={editorials.editorials[1].picture}
        alt="notarealstore"
      />
      <div className="homeEditorialsLabel">
        <p>EDITORIALS</p>
      </div>
    </div>
  );
}
