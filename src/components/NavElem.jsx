import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const NavLink = ({ to, text, onClick }) => {
  return (
    <Link to={to} onClick={onClick} className="text-white text-lg font-semibold md:p-2 font-[Kodchasan] hover:text-blue-300 hover:underline transition-colors">
      {text}
    </Link>
  );
};

const NavButton = ({ to, text, onClick }) => {
  return (
    <Link to={to} onClick={onClick} className="text-white text-lg rounded-full font-semibold bg-blue-700 px-6 py-2 m-1 md:ml-3 shadow hover:bg-blue-900 transition-all font-[Kodchasan] focus:outline-none focus:ring-2 focus:ring-blue-300">
      {text}
    </Link>
  );
};

const NavElem = ({ mobileLeft }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("user");
  const token = localStorage.getItem("token");
  const bankToken = localStorage.getItem("bankToken");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (bankToken) {
      setRole("Bank");
    } else if (token) {
      axios.get(BACKEND_URL + '/api/v2/user/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((res) => {
          setRole(res.data.user.role);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setRole("user");
    }
  }, [token, bankToken]);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className={mobileLeft ? "p-0 md:p-3 w-0 md:w-fit" : "p-3 w-0 md:w-fit"}>
      {/* Hamburger for mobile on the left */}
      <div className={mobileLeft ? "md:hidden flex flex-col justify-center" : "md:hidden flex flex-col justify-center"}>
        <button
          className="z-50 flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-300 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{ marginTop: '0.5rem' }}
          onClick={toggleNavbar}
        >
          {isOpen ? <CloseIcon fontSize="medium" className="text-blue-900" /> : <MenuIcon fontSize="medium" className="text-blue-900" />}
        </button>
        {isOpen && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-blue-900 bg-opacity-60 z-40 animate-fadeIn" onClick={toggleNavbar}></div>
            {/* Menu Card */}
            <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-xs bg-white rounded-2xl shadow-2xl flex flex-col items-center py-10 px-6 gap-6 border-2 border-blue-200 animate-fadeIn">
              <NavLink to="/" text="Home" onClick={handleLinkClick} />
              {role === "Admin" && <NavLink to="/admin" text="Admin Dashboard" onClick={handleLinkClick} />}
              {role === "user" && <NavLink to="/GovScol" text="GovScol" onClick={handleLinkClick} />}
              {role === "user" && <NavLink to="/PriScol" text="PriScol" onClick={handleLinkClick} />}
              <NavLink to="/Loans" text="Loans" onClick={handleLinkClick} />
              {(role === "Bank" || role === "Admin") && <NavLink to="/NewLoan" text="New Loans" onClick={handleLinkClick} />}
              {role === "Bank" && <NavLink to="/bank/dashboard" text="Bank Dashboard" onClick={handleLinkClick} />}
              {(token || bankToken) ? (
                <NavButton to="/logout" text="Logout" onClick={handleLinkClick} />
              ) : (
                <>
                  <NavButton to="/SignUp" text="SignUp" onClick={handleLinkClick} />
                  <NavButton to="/Login" text="Login" onClick={handleLinkClick} />
                  <NavButton to="/bank/signup" text="Bank Signup" onClick={handleLinkClick} />
                  <NavButton to="/bank/login" text="Bank Login" onClick={handleLinkClick} />
                </>
              )}
            </div>
          </>
        )}
      </div>
      {/* Desktop navigation */}
      <div className="hidden md:flex justify-between">
        <NavLink to="/" text="Home" />
        {role === "Admin" && <NavLink to="/admin" text="Admin Dashboard" />}
        {role === "user" && <NavLink to="/GovScol" text="GovScol" />}
        {role === "user" && <NavLink to="/PriScol" text="PriScol" />}
        <NavLink to="/Loans" text="Loans" />
        {(role === "Bank" || role === "Admin") && <NavLink to="/NewLoan" text="New Loans" />}
        {role === "Bank" && <NavLink to="/bank/dashboard" text="Bank Dashboard" />}
        {(token || bankToken) ? (
          <NavButton to="/logout" text="Logout" />
        ) : (
          <>
            <NavButton to="/SignUp" text="SignUp" />
            <NavButton to="/Login" text="Login" />
            <NavButton to="/bank/signup" text="Bank Signup" />
            <NavButton to="/bank/login" text="Bank Login" />
          </>
        )}
      </div>
      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default NavElem;
