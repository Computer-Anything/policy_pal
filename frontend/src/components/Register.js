import React, { useState } from 'react';
import api from '../api';


// Register component for user registration
const Register = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    // Check if username and email are provided
    try {
      const response = await api.post('/register', { username, email, password });
      setMessage(response.data.msg);
      onSwitchToLogin(); // Switch to login modal after successful registration
    } catch (error) {
      setMessage(error.response?.data?.msg || 'Registration failed');
    }
  };


  // Render the registration form
  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={{ position: 'relative' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {showPassword ? '👁️' : '🙈'}
        </button>
      </div>
      <div style={{ position: 'relative' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {showPassword ? '👁️' : '🙈'}
        </button>
      </div>
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
      <p style={{ marginTop: '10px' }}>
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          style={{
            background: 'none',
            border: 'none',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Login here
        </button>
      </p>
    </form>
  );
};

export default Register;
