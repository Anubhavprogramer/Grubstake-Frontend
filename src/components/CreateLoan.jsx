import React, { useState } from 'react';
import axios from 'axios';

const CreateLoan = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    link: '',
    amount: '',
    eligibilityCriteria: '',
    interestRate: '',
    provider: '',
    isActive: true,
    avatar: '',
    Application_Starting: '',
    Application_Closing: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Authorization token not found. Please log in again.');
        return;
      }
      axios.defaults.baseURL = 'http://localhost:4000';
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      await axios.post('/api/v3/bank/loan/create', formData);
      alert('Loan created successfully');
      setFormData({
        name: '',
        description: '',
        link: '',
        amount: '',
        eligibilityCriteria: '',
        interestRate: '',
        provider: '',
        isActive: true,
        avatar: '',
        Application_Starting: '',
        Application_Closing: '',
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Unauthorized. Please check your login status.');
      } else {
        alert('An error occurred while creating the loan.');
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 px-2">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 font-[Kodchasan] drop-shadow">Create New Loan</h2>
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">Loan Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full text-blue-900 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full text-blue-900 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">Loan Website Link</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full text-blue-900 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">Loan Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full text-blue-900 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">Eligibility Criteria</label>
            <input
              type="text"
              name="eligibilityCriteria"
              value={formData.eligibilityCriteria}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full text-blue-900 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">Interest Rate (%)</label>
            <input
              type="number"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full text-blue-900 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-1">Avatar URL</label>
            <input
              type="url"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full text-blue-900 border border-blue-200 rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-blue-900 font-semibold">Is Active</label>
          </div>
          <button type="submit" className="w-full mt-2 bg-blue-700 text-white py-3 px-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-all font-[Kodchasan]">
            Create Loan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateLoan;
