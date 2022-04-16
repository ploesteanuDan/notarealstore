import axios from "axios";
import React, { useState, useEffect } from "react";
import { CaretRight } from "phosphor-react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.scss";
export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  function login() {
    axios
      .post("http://localhost:3001/login", null, {
        params: { ...loginData },
      })
      .then((response) => {
        handleLoginResponse(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoginResponse(response) {
    if (response.status !== 200) {
      alert("An error occured");
      return;
    }
    if (response.data === "user is invalid") {
      alert("Data is incorrect. Try again.");
      return;
    }
    if (response.data.message === "user is valid" && response.status === 200) {
      localStorage.setItem("jwt_token", response.data.token);
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("user_name", response.data.user_name);
      console.log("jwt ->", localStorage.getItem("jwt_token"));
      console.log("r.data", response.data);
    }

    navigate("/account");
  }

  return (
    <div className="login">
      <div className="loginForm">
        <p className="bagTitle">Log in</p>
        <p className="description">
          Fill in your account data or select the data for your new account.
        </p>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setLoginData({ ...loginData, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
        />
        <button
          className="button"
          onClick={() => {
            login();
          }}
        >
          <p>Log in</p>
        </button>
      </div>
      <div className="img">
        <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
      </div>
      <Link to="/register">
        <div className="linkRegister"></div>
        <p>Register</p>
        <CaretRight size={20} />
      </Link>
    </div>
  );
}
