import React, { useState } from "react";
import axios from "axios";
import "./login.scss";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        import.meta.env.VITE_LOCALHOST + "/login",
        {
          email: e.target.email.value,
          password: e.target.password.value,
        }
      );

      if (response.data.success) {
        alert("Login successful!");
        navigate("/home");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Either password or username is entered incorrect');
      } else {
        console.error('Error login user:', error);
        alert('Error in loggin-in');
      }
    }
  };

  return (
    <section className="login">
      <div className="login__form">
        <h2 className="login__form--title">Login</h2>
        <form onSubmit={handlelogin}>
          <div className="input-group">
            <label>Email:</label>

            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label>Password:</label>

            <input type="password" id="password" name="password" />
          </div>
          <button>Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/register">
            <span>Register</span>
          </a>
        </p>
      </div>
    </section>
  );
}
