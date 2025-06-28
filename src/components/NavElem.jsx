import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const NavLink = ({ to, text, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white text-lg font-bold px-3 py-1 rounded transition-colors duration-150 hover:text-blue-200 hover:underline focus:outline-none"
    >
      {text}
    </Link>
  );
};

const NavButton = ({ to, text, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white text-lg rounded-full font-semibold bg-blue-700 px-6 py-2 mx-1 shadow hover:bg-blue-900 transition-all font-[Kodchasan] focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
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
      axios.get(BACKEND_URL + 'api/v2/user/me', {
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

  // Desktop navigation
  return (
    <nav className="w-full z-50">
      <div className=" w-full flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-b-2xl">
        {/* Left: Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="z-50 flex items-center justify-center  rounded-full border-2 border-blue-300 bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={toggleNavbar}
          >
            {isOpen ? <CloseIcon fontSize="medium" className="text-blue-900" /> : <MenuIcon fontSize="medium" className="text-blue-900" />}
          </button>
        </div>
        {/* Center: Nav links (desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-2">
          <NavLink to="/" text="Home" />
          {role === "Admin" && <NavLink to="/admin" text="Admin Dashboard" />}
          {role === "user" && <NavLink to="/GovScol" text="GovScol" />}
          {role === "user" && <NavLink to="/PriScol" text="PriScol" />}
          <NavLink to="/Loans" text="Loans" />
          {(role === "Bank" || role === "Admin") && <NavLink to="/NewLoan" text="New Loans" />}
          {role === "Bank" && <NavLink to="/bank/dashboard" text="Bank Dashboard" />}
        </div>
        {/* Right: Action buttons (desktop) */}
        <div className="hidden md:flex items-center gap-2 ml-6">
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
        {/* Mobile menu overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-blue-900 bg-opacity-80 z-40 flex flex-col items-center justify-center animate-fadeIn">
            <div className="flex flex-col gap-6 items-center w-full max-w-xs p-8 bg-white rounded-2xl shadow-2xl border-2 border-blue-200">
              <NavLink to="/" text="Home" onClick={handleLinkClick} />
              {role === "Admin" && <NavLink to="/admin" text="Admin Dashboard" onClick={handleLinkClick} />}
              {role === "user" && <NavLink to="/GovScol" text="GovScol" onClick={handleLinkClick} />}
              {role === "user" && <NavLink to="/PriScol" text="PriScol" onClick={handleLinkClick} />}
              <NavLink to="/Loans" text="Loans" onClick={handleLinkClick} />
              {(role === "Bank" || role === "Admin") && <NavLink to="/NewLoan" text="New Loans" onClick={handleLinkClick} />}
              {role === "Bank" && <NavLink to="/bank/dashboard" text="Bank Dashboard" onClick={handleLinkClick} />}
              <div className="flex flex-col gap-2 w-full mt-4">
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
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </nav>
  );
};

export default NavElem;
