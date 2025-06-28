import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const BankDashboard = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [bankId, setBankId] = useState(null);

  useEffect(() => {
    const fetchBankAndLoans = async () => {
      setLoading(true);
      setError('');
      try {
        const bankToken = localStorage.getItem('bankToken');
        if (!bankToken) {
          setError('Not authenticated as bank');
          setLoading(false);
          return;
        }
        // Get bank details to get bank id
        const bankRes = await axios.get(`${BACKEND_URL}api/v3/bank/me/`, {
          headers: { Authorization: `Bearer ${bankToken}` },
        });
        const bank = bankRes.data.bank;
        setBankId(bank._id);
        // Get all loans
        const loansRes = await axios.get(`${BACKEND_URL}api/v3/bank/loan`, {
          headers: { Authorization: `Bearer ${bankToken}` },
        });
        // Only show loans created by this bank
        const myLoans = (loansRes.data.loans || []).filter(
          (loan) => loan.instituteCreated === bank._id
        );
        setLoans(myLoans);
      } catch (err) {
        setError('Failed to fetch bank or loans');
      } finally {
        setLoading(false);
      }
    };
    fetchBankAndLoans();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-2 py-8">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-2xl text-center flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <span className="text-blue-700 text-4xl mb-1" role="img" aria-label="bank">🏦</span>
          <h2 className="text-3xl font-bold text-blue-900 font-[Kodchasan]">Welcome, Bank!</h2>
          <p className="text-blue-800 text-lg">Manage your loans and help students achieve their dreams.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="bg-blue-100 rounded-xl p-6 flex flex-col items-center shadow w-full md:w-1/2 min-h-[90px] justify-center">
            <span className="text-2xl font-bold text-blue-900">{loading ? '-' : loans.length}</span>
            <span className="text-blue-700 font-semibold">Total Loans Created</span>
          </div>
          <Link to="/NewLoan" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold shadow transition-all text-lg w-full md:w-1/2 min-h-[90px] justify-center flex">
            <span className="text-xl" role="img" aria-label="plus">➕</span> Create New Loan
          </Link>
        </div>
        <div className="bg-blue-100 rounded-xl p-6 mt-2 shadow">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Recent Loans</h3>
          {loading ? (
            <div className="text-blue-700">Loading...</div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : loans.length === 0 ? (
            <div className="text-blue-700">No loans created yet.</div>
          ) : (
            <ul className="space-y-2">
              {loans.slice(-3).reverse().map((loan, idx) => (
                <li key={loan._id || idx} className="flex justify-between text-blue-800 bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span>{loan.name}</span>
                  <span className="font-semibold">₹{loan.amount?.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BankDashboard; 