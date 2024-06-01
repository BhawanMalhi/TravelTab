import React from "react";
import "./addTrip.scss";

export default function AddTrip() {
  return (
    <section className="trip">
      
      <div className="trip__form">
      <h2 className="trip__title">ADD A NEW TRIP</h2>
        <form>
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
