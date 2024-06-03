import React from 'react'
import "./addExpense.scss";
import { Link, useNavigate } from "react-router-dom";
export default function AddExpense() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/home");
  };
  return (
    <section className="expense">
      <div className="expense__form">
      <button className="expense__form--cancelBtn" onClick={toHome}><i className ="fa-regular fa-circle-xmark"></i></button>

        <h2 className="expense__title">ADD A NEW EXPENSE</h2>
        <form>
          <div>
            <label>Category:</label>
            <input type="text" id="category" name="category" />
          </div>
          <div>
            <label>Discription:</label>
            <input type="text" id="Discription" name="Discription" />
          </div>
          <div>
            <label>Amount:</label>
            <input type="text" id="Amount" name="Amount" />
          </div>
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </section>
  );
}
