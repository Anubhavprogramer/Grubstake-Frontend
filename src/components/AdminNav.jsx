import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/admin/statistics', label: 'Statistics' },
  { to: '/admin/scholarships', label: 'Scholarships' },
  { to: '/admin/new-scholarship', label: 'New Scholarship' }
];

const AdminNav = () => (
  <nav className="flex justify-center bg-white border-b border-blue-200 mb-4">
    {navItems.map(item => (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `px-4 py-3 mx-1 text-lg font-[Kodchasan] transition-colors ` +
          (isActive ? 'font-bold text-blue-900 border-b-2 border-blue-900' : 'text-blue-700 hover:text-blue-900')
        }
      >
        {item.label}
      </NavLink>
    ))}
  </nav>
);

export default AdminNav; 