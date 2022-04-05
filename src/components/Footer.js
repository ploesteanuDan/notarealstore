import React from "react";
import "../styles/footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerPolicy">
        <p>Privacy Policy</p>
        <p>Cookies</p>
        <p>GDPR</p>
      </div>
      <div className="footerName">
        <p>Not a real store</p>
      </div>
      <div className="vLine vl1" />
      <div className="vLine vl2" />
    </div>
  );
}
