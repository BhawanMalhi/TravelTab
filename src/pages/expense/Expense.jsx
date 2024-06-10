import React from "react";
import "./expense.scss";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Expense() {
  const navigate = useNavigate();
  const toAddExpense = () => {
      navigate("/addExpense");
    };
    const toHome = () => {
      navigate("/home");
    };

 const { tripId } = useParams();
 const [trip, setTrip] = useState(null);



 useEffect(() => {
  if (!tripId) {
    console.error('tripId is undefined');
    return;
  }
  
  const getTrip = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_LOCALHOST}/travelTab/trips/${tripId}`
      );
      const data = response.data;
      setTrip(data);
    } catch (error) {
      console.error("Error fetching trip details:", error);
    }
  };

  getTrip();
  }, [tripId]);

  if (!trip) {
    return null;
  }

  
  const totalAmount = trip.expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  return (
    <div className="trip" style={{ backgroundImage: `url(${trip.src})` }}>
      <div className="trip__wrapper">
        <h1>Trip to {trip.place}, {trip.country}</h1>
        <Link to={`/travelTab/trips/${tripId}/addExpense`} className="trip__wrapper--btn">Add Expense</Link>
       
        <button className="trip__wrapper--cancelBtn" onClick={toHome}><i className ="fa-regular fa-circle-xmark"></i></button>
        <h2>Expenses</h2>
        <table className="expenses-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {trip.expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
                <td>{expense.discription}</td>
                <td><span>$</span>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td><span>$</span>{totalAmount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
