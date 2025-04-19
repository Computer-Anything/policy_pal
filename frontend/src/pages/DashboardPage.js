import React from 'react';
import { useNavigate } from 'react-router-dom';


// DashboardPage.js
const DashboardPage = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove the JWT token
    navigate('/'); // Redirect to the Landing Page
  };

  // Function to navigate to the Profile Page
  const goToProfile = () => {
    navigate('/profile'); // Redirect to the Profile Page
  };


  // Render the dashboard page
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to your Dashboard</h1>
      <p>Here you can manage your policies and cookie banners.</p>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={goToProfile}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Profile
        </button>
        <button
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#FF4D4D',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
