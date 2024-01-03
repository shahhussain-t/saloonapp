import React from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./pages/Appointment";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="/Appointment" element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
