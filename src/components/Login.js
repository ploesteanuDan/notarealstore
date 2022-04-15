import React from "react";
import "../styles/login.scss";
export default function Login() {
  return (
    <div className="login">
      <div className="loginForm">
        <p className="bagTitle">Log in</p>
        <p className="description">
          Fill in your account data or select the data for your new account.
        </p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="button">
          <p>Log in</p>
        </button>
      </div>
      <div className="img">
        <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
      </div>
    </div>
  );
}
