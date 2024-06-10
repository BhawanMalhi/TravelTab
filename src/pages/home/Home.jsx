import React from "react";
import "./home.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";


export default function Home() {

  const navigate = useNavigate();
    
      
     const [tripsList, setTripsList] = useState([]);
      const serverUrl = import.meta.env.VITE_LOCALHOST;


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
      

      const deleteTrip = async (tripId) => {
        try {
          await axios.delete(`${serverUrl}/travelTab/trips/${tripId}`);
          setTripsList(tripsList.filter(trip => trip.id !== tripId));
          alert('Trip deleted successfully!');
        } catch (error) {
          console.error('Error deleting trip:', error);
          alert('Error deleting trip');
        }
      };
      useEffect(() => {
        
      
        fetchTrips();
      }, [serverUrl]); 


  return (
   
    <div className="home">
      <h1>My Trips</h1>
      <button className="home__addBtn" onClick={() => navigate("/addTrip")}>Add Trip</button>
      <div className="home__cards">
        {tripsList.map((item) => (
          <div key={item.id} className="home__card">
              <button onClick={() => deleteTrip(item.id)} className="deleteBtn"><i className="fa-solid fa-xmark"></i></button>
            <Link to={`/travelTab/trips/${item.id}`}>
              <img src={item.src} alt={item.place} className="home__card--img" />
              <div className="home__card--text">
                <h2>{item.place}</h2>
                <p>{item.country}</p>
              </div>
            </Link>
          
          </div>
        ))}
      </div>
    </div>
  );
}
