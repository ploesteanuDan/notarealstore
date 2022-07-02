import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/register.scss";
import { validateEmail, validatePassword } from "../handlers/validation";
export default function Register() {
  const [registerData, setRegisterData] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  function register() {
    if (!validateEmail(registerData.email)) {
      alert("Email is not valid");
      return;
    }
    if (!validatePassword(registerData.password)) {
      alert(
        "Password must be at least 6 characters long, contain letters and numbers"
      );
      return;
    }
    axios
      .post("http://localhost:3001/register", null, {
        params: {
          email: registerData.email,
          password: registerData.password,
          name: registerData.name,
          surname: registerData.surname,
        },
      })
      .then((response) => {
        handleRegisterResponse(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleRegisterResponse(response) {
    console.log(response.data);
    if (!response.data) {
      alert("Unknown error occured.");
    } else {
      if (response.data.message === "user already exists") {
        alert(
          "There's already an account with this email. If it's you, log in."
        );
      } else if (response.data.message === "user is valid") {
        window.localStorage.setItem("jwt_token", response.data.token);
        navigate("/account");
      }
    }
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
            register();
          }}
        >
          <p>Register</p>
        </button>
      </div>
      <div className="img">
        <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
      </div>
      <Link to="/login">
        <div className="linkRegister">
          <p>Already a user? Log in</p>
        </div>
      </Link>
    </div>
  );
}
