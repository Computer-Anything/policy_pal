import React, { useState } from 'react';
import api from '../api';


// Login component for user authentication
const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { username, password });
      localStorage.setItem('access_token', response.data.access_token); // Store JWT token
      onLoginSuccess(); // Redirect to Dashboard
    } catch (error) {
      setMessage(error.response?.data?.msg || 'Login failed');
    }
  };


  // Render the login form
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
