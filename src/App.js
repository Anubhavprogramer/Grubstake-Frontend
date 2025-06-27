import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout.jsx'; // The layout component
import Home from './components/Home.jsx';
import GovScol from './components/GovScol.jsx';
import PriScol from './components/PriScol.jsx';
import Sponsers from './components/Sponsers.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';
import Logout from './components/Logout.jsx';
import CreateLoan from './components/CreateLoan.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import AdminStatistics from './components/AdminStatistics.jsx';
import AdminScholarships from './components/AdminScholarships.jsx';
import AdminNewScholarship from './components/AdminNewScholarship.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes without Header and Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />

        {/* Routes wrapped with MainLayout that include Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* Protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/GovScol" element={<GovScol />} />
            <Route path="/PriScol" element={<PriScol />} />
            <Route path="/Loans" element={<Sponsers />} />
            <Route path="/NewLoan" element={<CreateLoan/>} />
            {/* Admin dashboard nested routes */}
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<Navigate to="statistics" replace />} />
              <Route path="statistics" element={<AdminStatistics />} />
              <Route path="scholarships" element={<AdminScholarships />} />
              <Route path="new-scholarship" element={<AdminNewScholarship />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
