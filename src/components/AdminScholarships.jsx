import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const AdminScholarships = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      try {
        const res = await axios.get(BACKEND_URL + 'api/v1/Admin/scholarships', { withCredentials: true });
        setScholarships(res.data.scholarship || []);
      } catch (err) {
        setError('Failed to fetch scholarships');
      } finally {
        setLoading(false);
      }
    };
    fetchScholarships();
  }, []);

  return (
    <div>
      {loading && <LoadingScreen />}
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">All Scholarships</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <div className="bg-white rounded-xl shadow p-6 max-w-4xl mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full text-blue-900">
            <thead>
              <tr>
                <th className="px-2 py-1">Name</th>
                <th className="px-2 py-1">Type</th>
                <th className="px-2 py-1">Amount</th>
                <th className="px-2 py-1">Provider</th>
                <th className="px-2 py-1">Start</th>
                <th className="px-2 py-1">End</th>
              </tr>
            </thead>
            <tbody>
              {scholarships.map(s => (
                <tr key={s._id} className="border-b">
                  <td className="px-2 py-1">{s.name}</td>
                  <td className="px-2 py-1">{s.isGovernment ? 'Government' : 'Private'}</td>
                  <td className="px-2 py-1">{s.amount}</td>
                  <td className="px-2 py-1">{s.provider}</td>
                  <td className="px-2 py-1">{s.Application_Starting?.slice(0,10)}</td>
                  <td className="px-2 py-1">{s.application_Closing?.slice(0,10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminScholarships; 