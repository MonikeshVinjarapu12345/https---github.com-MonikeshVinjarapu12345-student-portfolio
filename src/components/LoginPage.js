// src/components/LoginPage.js
import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input type="text" name="username" />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
