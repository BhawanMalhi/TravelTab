import React, { useState } from 'react';

import axios from 'axios';
import './login.scss';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    // const toHome = () => {
    //     navigate("/home");
    //   };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`${import.meta.env.VITE_LOCALHOST}/login`, {
          email,
          password,
        });
  
        if (response.data.success) {
          alert('Login successful!');
          navigate('/home');
        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('Error logging in');
      }
    };


  return (
     <section className="login"> 
        <div className="login__form">
        <h2 className="login__form--title">Login</h2>
        <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email:</label>
                    
                    <input type="email"  id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                   
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                </div>
                <button >Login</button>
            </form>
            <p>
            Don't have an account? <a href="/register"><span>Register</span></a>
           </p>
        </div>
     </section>
  )
}
