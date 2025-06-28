import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoadingScreen from './LoadingScreen.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const SignUp = () => {
  const [TermsChecked, setTermsChecked] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheck = () => {
    setTermsChecked(!TermsChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(BACKEND_URL + '/api/v2/user/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role
      }, {
        withCredentials: true
      });
      // Store token in localStorage for authentication
      localStorage.setItem('token', response.data.token);
      setLoading(false);
      // Redirect to home
      navigate('/');
    } catch (error) {
      setError(error.response ? error.response.data.message : 'An error occurred');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      {loading && <LoadingScreen />}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-900 font-[Kodchasan]">Sign Up</h2>
        {error && <p className='text-red-400 mb-4 text-center'>{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-blue-900">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="username"
              className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-900">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
              className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-blue-900">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a role</option>
              <option value="User">User</option>
              <option value="Bank">Bank</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="w-4 h-4 text-blue-900 border-blue-300 rounded focus:ring-blue-500"
                required
                checked={TermsChecked}
                onChange={handleCheck}
              />
              <label htmlFor="terms" className="block ml-2 text-sm text-blue-900">
                I agree to the <button type="button" className="underline text-blue-900 hover:text-blue-700 focus:outline-none" onClick={() => alert('Show Terms and Conditions modal here')}>Terms and Conditions</button>
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={!TermsChecked || loading}
              className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${!TermsChecked || loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-900 hover:bg-blue-700'}`}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
          <div className="text-sm text-center text-blue-900">
            Already have an account? <Link to="/login" className="font-medium underline hover:text-blue-700">Sign in</Link>
          </div>
          <div className="text-sm text-center text-blue-900 mt-2">
            <Link to="/" className="font-medium underline hover:text-blue-700">Go to Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
