import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import { Link, useNavigate } from 'react-router-dom';

const BankSignup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    branch: '',
    assets: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError('');
        setSuccess('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}api/v3/bank/register`,
        {
          ...form,
          assets: Number(form.assets),
        }
      );
      setSuccess('Bank registered successfully! Please login.');
      setForm({ name: '', email: '', password: '', location: '', branch: '', assets: '' });
      setTimeout(() => navigate('/bank/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      {loading && <LoadingScreen />}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-900 font-[Kodchasan]">Bank Signup</h2>
        {error && <p className='text-red-400 mb-4 text-center'>{error}</p>}
        {success && <p className='text-green-600 mb-4 text-center'>{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-900">Bank Name</label>
            <input name="name" id="name" value={form.name} onChange={handleChange} placeholder="Bank Name" required className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-900">Email Address</label>
            <input name="email" id="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-900">Password</label>
            <input name="password" id="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-blue-900">Location</label>
            <input name="location" id="location" value={form.location} onChange={handleChange} placeholder="Location" required className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-blue-900">Branch</label>
            <input name="branch" id="branch" value={form.branch} onChange={handleChange} placeholder="Branch" required className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="assets" className="block text-sm font-medium text-blue-900">Assets</label>
            <input name="assets" id="assets" type="number" value={form.assets} onChange={handleChange} placeholder="Assets" required className="w-full px-4 py-2 mt-1 text-blue-900 bg-white border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {loading ? 'Registering...' : 'Register as Bank'}
            </button>
          </div>
          <div className="text-sm text-center text-blue-900">
            Already have a bank account? <Link to="/bank/login" className="font-medium underline hover:text-blue-700">Bank Login</Link>
          </div>
          <div className="text-sm text-center text-blue-900 mt-2">
            <Link to="/" className="font-medium underline hover:text-blue-700">Go to Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankSignup; 