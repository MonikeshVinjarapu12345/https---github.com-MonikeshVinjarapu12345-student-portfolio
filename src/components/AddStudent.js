import React, { useState } from 'react';

const AddStudent = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [projects, setProjects] = useState([{ projectName: '', description: '' }]);

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const addProjectField = () => {
    setProjects([...projects, { projectName: '', description: '' }]);
  };

  const removeProjectField = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && grade && projects.every(project => project.projectName && project.description)) {
      // Call the onAdd function passed from the parent (App.js) to add the new student with projects
      onAdd({ name, grade, projects });
      setName(''); // Clear input after submission
      setGrade(''); // Clear input after submission
      setProjects([{ projectName: '', description: '' }]); // Reset projects field
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Grade:</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Projects:</label>
        {projects.map((project, index) => (
          <div key={index}>
            <div>
              <label>Project Name:</label>
              <input
                type="text"
                value={project.projectName}
                onChange={(e) => handleProjectChange(index, 'projectName', e.target.value)}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <input
                type="text"
                value={project.description}
                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                required
              />
            </div>
            {projects.length > 1 && (
              <button type="button" onClick={() => removeProjectField(index)}>
                Remove Project
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addProjectField}>
          Add Another Project
        </button>
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
