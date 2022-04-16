import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/register.scss";

export default function Register() {
  const [registerData, setRegisterData] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  function register() {
    axios
      .post("http://localhost:3001/register", null, {
        params: { ...registerData },
      })
      .then((response) => {
        handleRegisterResponse(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleRegisterResponse(response) {
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
    <div className="register">
      <div className="registerForm">
        <p className="bagTitle">Register</p>
        <p className="description">
          Create your Not a real store account. You'll be sent to your page.
        </p>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setRegisterData({ ...registerData, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setRegisterData({ ...registerData, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Surname"
          onChange={(e) => {
            setRegisterData({ ...registerData, surname: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setRegisterData({ ...registerData, password: e.target.value });
          }}
        />
        <button
          className="button"
          onClick={() => {
            Register();
          }}
        >
          <p>Register</p>
        </button>
      </div>
      <div className="img">
        <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
      </div>
    </div>
  );
}
