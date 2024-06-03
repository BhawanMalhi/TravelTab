import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/logIn/Login";
import Home from "./pages/home/Home";
import AddTrip from "./pages/addTrip/AddTrip";
import Expense from "./pages/expense/Expense";
import AddExpense from "./pages/addExpense/addExpense";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addTrip" element={<AddTrip />} />
          <Route path="/travelTab/trips/:tripId" element={<Expense />}  />
          <Route path="/addExpense" element={<AddExpense />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
