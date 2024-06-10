import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";

export default function Register() {
  const navigate = useNavigate();
  
  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post(import.meta.env.VITE_LOCALHOST + "/register", {
        
        email: e.target.email.value,
        name: e.target.name.value,
        password: e.target.password.value,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert('This email already register');
      } else {
        console.error('Error registering user:', error);
        alert('Error registering user');
      }
    }
  };

  return (
    <div className="register">
      <div className="register__form">
        <h2 className="register__form--title">Register</h2>
        <form onSubmit={registerUser}>
          <div className="register__form--input">
            <label>Email</label>
            <input type="email" name="email" id="email"/>
          </div>
          <div className="register__form--input">
            <label>Name</label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="register__form--input">
            <label>Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          Back to{" "}
          <a href="/login">
            <span>LogIn</span>
          </a>
        </p>
      </div>
    </div>
  );
}
