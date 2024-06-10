import React from 'react'
import "./addExpense.scss";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




export default function AddExpense() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  

  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [discription,setDiscription] = useState('');


  const toHome = () => {
    navigate("/home");
  };
 

  
  const addExpense = async (event) => {
    event.preventDefault();
  

    try {
      await axios.post(`${import.meta.env.VITE_LOCALHOST}/travelTab/trips/${tripId}/addExpense`, {
        category: event.target.category.value,
        amount: event.target.amount.value,
        discription: event.target.discription.value,
      });

      alert("expense  was succesfully added");
      navigate(`/travelTab/trips/${tripId}`);
     
    } catch (e) {
      console.log("there was errro in adding this Expense", e);
    }
  };


  return (
    <section className="expense">
      <div className="expense__form">
      <button className="expense__form--cancelBtn" onClick={toHome}><i className ="fa-regular fa-circle-xmark"></i></button>
      
        <h2 className="expense__title">ADD A NEW EXPENSE</h2>
        <form onSubmit={(e) => addExpense(e)}>
          <div>
            <label>Category:</label>
            <input type="text" id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
          </div>
          <div>
            <label>Discription:</label>
            <input type="text" id="discription" name="discription" value={discription} onChange={(e) => setDiscription(e.target.value)}/>
          </div>
          <div>
            <label>Amount:</label>
            <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </section>
  );
}
