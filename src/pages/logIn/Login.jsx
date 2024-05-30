import React from 'react'
import './login.scss';
export default function Login() {
  return (
     <section className="login"> 
        <div className="login__form">
        <h2 className="login__form--title">Login</h2>
        <form>
                <div className="input-group">
                    <label>Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
     
        </div>
     </section>
  )
}
