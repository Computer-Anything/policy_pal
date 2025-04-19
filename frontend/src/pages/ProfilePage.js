import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';


// ProfilePage.js
const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch user profile data when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await api.get('/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        setMessage(error.response?.data?.msg || 'Failed to fetch profile');
      }
    };
    fetchProfile();
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove the JWT token
    navigate('/'); // Redirect to the Landing Page
  };

  // If there's a message, display it
  // This can be an error message or a success message
  if (message) return <p>{message}</p>;

  
  // Render the profile page
  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <div>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>Created At: {profile.created_at}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
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
  );
};

export default ProfilePage;
