import React from "react";
import "./home.scss";
import Expense from "../expense/Expense";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


export default function Home() {

  const navigate = useNavigate();
    const toAddTrip = () => {
        navigate("/addTrip");
      };
      
     const [tripsList, setTripsList] = useState([]);
      const serverUrl = import.meta.env.VITE_LOCALHOST;
      useEffect(() => {
        const fetchTrips = async () => {
          try {
            const response = await fetch(`${serverUrl}/travelTab/trips`);
            if (!response.ok) {
              throw new Error('Failed to fetch expenses');
            }
            const data = await response.json();
            setTripsList(data);
          } catch (error) {
            console.error('Error fetching expenses:', error);
          }
        };
    
        fetchTrips();
      }, [serverUrl]); 


  return (
    <div className="home">
      <h1>My Trips</h1>
      <button className="home__addBtn" onClick={toAddTrip}>Add Trip</button>
      <div className="home__cards">
      {tripsList.map((item, index) => (
        <Link  key={item.id} to={`/travelTab/trips/${item.id}`} >
          <div className="home__card" key={index}>
          <img src={item.src} alt={item.place} className="home__card--img" />
          <div className="home__card--text">
            <h2>{item.place}</h2>
            <p>{item.country}</p>
          </div>
        </div>
        </Link>
        
      ))}
      </div>
      
    </div>
  );
}
