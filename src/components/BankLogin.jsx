import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import LoadingScreen from './LoadingScreen';

const BankLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v3/bank/login`,
        form
      );
      const token = res.data.token;
      if (token) {
        localStorage.setItem('bankToken', token);
        navigate('/bank/dashboard');
      } else {
        setError('No token received');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      {loading && <LoadingScreen />}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-900 font-[Kodchasan]">Bank Login</h2>
        {error && <p className='text-red-400 mb-4 text-center'>{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-900">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
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
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? 'Signing In...' : 'Sign in as Bank'}
            </button>
          </div>
          <div className="text-sm text-center text-blue-900">
            Don't have a bank account? <Link to="/bank/signup" className="font-medium underline hover:text-blue-700">Bank Signup</Link>
          </div>
          <div className="text-sm text-center text-blue-900 mt-2">
            <Link to="/" className="font-medium underline hover:text-blue-700">Go to Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankLogin; 