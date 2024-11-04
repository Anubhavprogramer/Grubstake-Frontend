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
      // Retrieve token from localStorage
      const token = localStorage.getItem('token');
      
      // Check if token exists
      if (!token) {
        console.error('Token is missing');
        alert('Authorization token not found. Please log in again.');
        return;
      }

      console.log('Retrieved token:', token);

      // Configure Axios defaults with baseURL and headers
      axios.defaults.baseURL = 'http://localhost:4000';
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Send the form data as JSON
      const response = await axios.post('/api/v3/bank/loan/create', formData);

      console.log('Loan created successfully:', response);
      alert('Loan created successfully');

      // Reset form after successful submission
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
      console.error('Error creating loan:', error);
      if (error.response && error.response.status === 401) {
        alert('Unauthorized. Please check your login status.');
      } else {
        alert('An error occurred while creating the loan.');
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-Grubstake text-white flex flex-col justify-center items-center rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create New Loan</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-2/3">
        <div>
          <label className="block text-sm font-medium">Loan Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full text-black border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full text-black border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Loan Website Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full text-black border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Loan Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full text-black border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Eligibility Criteria</label>
          <input
            type="text"
            name="eligibilityCriteria"
            value={formData.eligibilityCriteria}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full text-black border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Interest Rate (%)</label>
          <input
            type="number"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full text-black border rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Avatar URL</label>
          <input
            type="url"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full text-black border rounded-md shadow-sm"
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
          <label className="ml-2 block text-sm text-white">Is Active</label>
        </div>
        <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
          Create Loan
        </button>
      </form>
    </div>
  );
};

export default CreateLoan;
