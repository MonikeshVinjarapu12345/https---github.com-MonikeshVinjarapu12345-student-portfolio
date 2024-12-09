// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import LoginPage from './components/LoginPage'; // Update the path if needed
import SignUpPage from './components/SignUpPage'; // Update the path if needed
import HomePage from './components/HomePage'; // Import HomePage
import './App.css';

const App = () => {
  const [students, setStudents] = useState([
    { name: 'John Doe', grade: 'A' },
    { name: 'Jane Smith', grade: 'B' },
  ]);

  const addStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Student Management System</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/add">Add Student</Link></li>
              <li><Link to="/students">Student List</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <div>
                <HomePage />
                <div className="welcome-section">
                  <h2>Welcome to the Student Management System</h2>
                  <p>This system helps you manage and view students, add new students, and handle user authentication.</p>
                  <div className="navigation-links">
                    <Link to="/login">Go to Login</Link> | 
                    <Link to="/signup">Sign Up</Link> | 
                    <Link to="/add">Add Student</Link> | 
                    <Link to="/students">View Student List</Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/add" element={<AddStudent onAdd={addStudent} />} />
            <Route path="/students" element={<StudentList students={students} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
