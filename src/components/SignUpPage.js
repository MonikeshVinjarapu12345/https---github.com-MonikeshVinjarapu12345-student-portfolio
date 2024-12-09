// src/components/SignUpPage.js
import React from 'react';

const SignUpPage = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Username:</label>
        <input type="text" name="username" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
