import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from './LoadingScreen.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem('token');

    // Make the API call to the server to log out the user
    axios.post(BACKEND_URL + '/api/v2/user/logout')
      .then(() => {
        setTimeout(() => navigate('/login'), 1000);
      })
      .catch(() => {
        setTimeout(() => navigate('/login'), 1000);
      });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <LoadingScreen />
      <span className="absolute text-white text-lg font-semibold mt-32">Logging out...</span>
    </div>
  );
};

export default Logout;
