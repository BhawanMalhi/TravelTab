import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/logIn/Login';
import Home from './pages/home/Home';
function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    
    </>
     
  )
}

export default App
