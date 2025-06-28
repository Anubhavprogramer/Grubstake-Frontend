import React, { useState } from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const AdminNewScholarship = () => {
  const [form, setForm] = useState({
    name: '',
    isGovernment: true,
    link: '',
    scholarshipType: 'Merit-based',
    avatar: '',
    Application_Starting: '',
    application_Closing: '',
    amount: '',
    eligibilityCriteria: '',
    provider: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const token = localStorage.getItem('token');
      await axios.post(BACKEND_URL + 'api/v1/Admin/scholarships', {
        ...form,
        amount: Number(form.amount)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Scholarship created successfully!');
      setForm({
        name: '',
        isGovernment: true,
        link: '',
        scholarshipType: 'Merit-based',
        avatar: '',
        Application_Starting: '',
        application_Closing: '',
        amount: '',
        eligibilityCriteria: '',
        provider: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create scholarship');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <LoadingScreen />}
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Create New Scholarship</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {success && <div className="text-green-600 text-center mb-4">{success}</div>}
      <div className="bg-white rounded-xl shadow p-6 mb-8 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-blue-900 mb-1">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded" />
          </div>
          <div>
            <label className="block text-blue-900 mb-1">Type</label>
            <select name="isGovernment" value={form.isGovernment} onChange={e => setForm(f => ({ ...f, isGovernment: e.target.value === 'true' }))} className="w-full px-3 py-2 border border-blue-300 rounded">
              <option value="true">Government</option>
              <option value="false">Private</option>
            </select>
          </div>
          <div>
            <label className="block text-blue-900 mb-1">Link</label>
            <input type="text" name="link" value={form.link} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded" />
          </div>
          <div>
            <label className="block text-blue-900 mb-1">Scholarship Type</label>
            <select name="scholarshipType" value={form.scholarshipType} onChange={handleChange} className="w-full px-3 py-2 border border-blue-300 rounded">
              <option value="Merit-based">Merit-based</option>
              <option value="Need-based">Need-based</option>
              <option value="Athletic">Athletic</option>
              <option value="Minority">Minority</option>
              <option value="Disability">Disability</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-blue-900 mb-1">Avatar URL</label>
            <input type="text" name="avatar" value={form.avatar} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded" />
          </div>
          <div>
            <label className="block text-blue-900 mb-1">Start Date</label>
            <input type="date" name="Application_Starting" value={form.Application_Starting} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded" />
          </div>
          <div>
            <label className="block text-blue-900 mb-1">Closing Date</label>
            <input type="date" name="application_Closing" value={form.application_Closing} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded" />
          </div>
          <div>
            <label className="block text-blue-900 mb-1">Amount</label>
            <input type="number" name="amount" value={form.amount} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-blue-900 mb-1">Eligibility Criteria</label>
            <textarea name="eligibilityCriteria" value={form.eligibilityCriteria} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-blue-900 mb-1">Provider</label>
            <input type="text" name="provider" value={form.provider} onChange={handleChange} required className="w-full px-3 py-2 border border-blue-300 rounded" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminNewScholarship; 