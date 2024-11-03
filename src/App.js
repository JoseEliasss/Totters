import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./components/RestaurantDescription";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/Restaurants" element={<Restaurants />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
