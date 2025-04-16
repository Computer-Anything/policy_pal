import React, { useState, useEffect } from 'react';
import api from '../api';
import Logout from './Logout';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState('');

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

  if (message) return <p>{message}</p>;

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
      <Logout /> {/* Add the Logout button here */}
    </div>
  );
};

export default Profile;
