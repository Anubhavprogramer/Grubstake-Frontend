import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-8 px-2 md:px-8 font-[Kodchasan]">
      <Outlet />
    </div>
  );
};

export default AdminDashboard; 