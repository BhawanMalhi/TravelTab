import React from 'react';
import './header.scss';
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
        <div className="header__wrapper">
          
           <NavLink to="/"> <h2>TravelTab</h2></NavLink>

        </div>
    </div>
  )
}
