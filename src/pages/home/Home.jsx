import React from "react";
import "./home.scss";
import img from "../../assets/images/image4.jpg";

let trips = [
  {
    id: 1,
    place: "golden Temple",
    country: "India",
    src: "xxx",
  },
  { id: 2, place: "Mount fuzi", country: "japan", src: "xxx" },
  { id: 3, place: "venice", country: "Italy", src: "xxx" },
  { id: 4, place: "Toronto", country: "Canada", src: "xxx" },
  { id: 5, place: "Toronto", country: "Canada", src: "xxx" }
  
  
];

export default function Home() {
  return (
    <div className="home">
      <h1>My Trips</h1>
      <button className="home__addBtn">Add Trip</button>
      <div className="home__cards">
      {trips.map((item, index) => (
        <div className="home__card" key={index}>
          <img src={img} alt={item.place} className="home__card--img" />
          <div className="home__card--text">
            <h2>{item.place}</h2>
            <p>{item.country}</p>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
}
