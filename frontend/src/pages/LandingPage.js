import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from '../components/Login';
import Register from '../components/Register';
import '../styles/LandingPage.css'; // Assuming you have some CSS for styling


// LandingPage.js
const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle the "Get Started" button click
  const handleGetStarted = () => {
    setIsRegisterOpen(true); // Open the Register modal by default
  };

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    navigate('/dashboard'); // Redirect to Dashboard after login
  };


  // Render the landing page
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to PolicyPal</h1>
      <p>Generate Terms of Service, Privacy Policies, and Cookie Banners easily!</p>
      <button
        onClick={handleGetStarted}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Get Started
      </button>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <Login onLoginSuccess={handleLoginSuccess} />
      </Modal>

      {/* Register Modal */}
      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <Register
          onSwitchToLogin={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
        />
      </Modal>

      <p style={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <button
          onClick={() => setIsLoginOpen(true)}
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
    </div>
  );
};

export default LandingPage;
