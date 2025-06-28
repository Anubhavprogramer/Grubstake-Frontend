import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const AdminStatistics = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const res = await axios.get(BACKEND_URL + 'api/v1/Admin/stats', { withCredentials: true });
        setStats(res.data.stats);
      } catch (err) {
        setError('Failed to fetch stats');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      {loading && <LoadingScreen />}
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Statistics</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-900">{stats.userCount}</div>
            <div className="text-blue-700">Users</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-900">{stats.bankCount}</div>
            <div className="text-blue-700">Banks</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-900">{stats.loanCount}</div>
            <div className="text-blue-700">Loans</div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-900">{stats.scholarshipCount}</div>
            <div className="text-blue-700">Scholarships</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminStatistics; 