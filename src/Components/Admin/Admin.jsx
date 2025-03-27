import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Dashboard from "./Dashboard/dashboard";
import Navbar from "./Navbar/Navbar";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar"; // New Navbar for Dashboard
import Course from "./Course/Course"; // ✅ Import Course Component
import Subject from "./Subject/Subject";

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location]); // Re-run this when location changes

  return (
    <React.Fragment>
      {/* Show different Navbars based on authentication */}
      {isAuthenticated ? <DashboardNavbar /> : <Navbar />}

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="course" element={<Course />} /> {/* ✅ Add Route for Course */}
        <Route path="subject" element={<Subject/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default Admin;
