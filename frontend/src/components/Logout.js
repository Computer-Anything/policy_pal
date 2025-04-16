import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <button onClick={handleLogout} style={{ marginTop: '20px' }}>
      Logout
    </button>
  );
};

export default Logout;
