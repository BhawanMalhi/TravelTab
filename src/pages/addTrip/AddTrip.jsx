import React from "react";
import "./addTrip.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AddTrip() {
  const navigate = useNavigate();
  const addTrip = async (event) => {
    event.preventDefault();
    console.log(import.meta.env.VITE_LOCALHOST + "/addTrip");

    try {
      await axios.post(import.meta.env.VITE_LOCALHOST + "/travelTab/trips", {
        place: event.target.place.value,
        country: event.target.country.value,
        date: event.target.date.value,
      });

      alert("trip was succesfully added");
      navigate("/home");
    } catch (e) {
      console.log("there was errro in adding this trip", e);
    }
  };

  return (
    <section className="trip">
      <div className="trip__form">
        <h2 className="trip__title">ADD A NEW TRIP</h2>
        <form onSubmit={(e) => addTrip(e)}>
          <div>
            <label>Place:</label>
            <input type="text" id="place" name="place" />
          </div>
          <div>
            <label>Country:</label>
            <input type="text" id="country" name="country" />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" id="date" name="date" />
          </div>
          <button type="submit">Add Trip</button>
        </form>
      </div>
    </section>
  );
}
