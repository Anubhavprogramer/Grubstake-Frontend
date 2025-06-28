import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from './LoadingScreen.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove both tokens
    localStorage.removeItem('token');
    localStorage.removeItem('bankToken');

    // Determine which logout endpoint to call
    const bankToken = localStorage.getItem('bankToken');
    const userToken = localStorage.getItem('token');
    let logoutPromise;
    if (bankToken) {
      logoutPromise = axios.post(BACKEND_URL + 'api/v3/bank/logout', {}, {
        headers: { Authorization: `Bearer ${bankToken}` }
      });
    } else {
      logoutPromise = axios.post(BACKEND_URL + 'api/v2/user/logout');
    }
    logoutPromise
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
