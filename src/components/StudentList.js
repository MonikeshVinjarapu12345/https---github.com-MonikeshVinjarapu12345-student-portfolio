import React from 'react';
import { Link } from 'react-router-dom';

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.grade}
          </li>
        ))}
      </ul>
      {/* Link to Add Student page */}
      <Link to="/add">Add New Student</Link>
    </div>
  );
};

export default StudentList;
