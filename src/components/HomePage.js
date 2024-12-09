// components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import CSS for styling if needed

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to the Student Management System</h2>
      <p>This system helps you manage and view students, add new students, and handle user authentication.</p>
      <div className="home-links">
        <Link to="/login">Go to Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/add">Add Student</Link>
        <Link to="/">View Student List</Link>
      </div>
    </div>
  );
};

export default HomePage;
