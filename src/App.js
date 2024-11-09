import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./components/RestaurantDescription";
import Cart from "./components/Cart";
import LoginPage from "./pages/LoginPage"; // Import the login page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);


  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };


  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Clear login state from localStorage
  };

  return (
    <div className="App">
      <Router>
        <Navbar onLogout={handleLogout} isAuthenticated={isAuthenticated} />
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/aboutUs"
            element={isAuthenticated ? <AboutUs /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/contactUs"
            element={isAuthenticated ? <ContactUs /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/restaurants"
            element={isAuthenticated ? <Restaurants /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/restaurant/:id"
            element={isAuthenticated ? <RestaurantDetail /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/cart"
            element={isAuthenticated ? <Cart /> : <Navigate to="/login" replace />}
          />

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;