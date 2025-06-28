import React, { useEffect, useState } from "react";
import NavElem from "./NavElem";
import AdminNav from "./AdminNav";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get(BACKEND_URL + 'api/v2/user/me', { withCredentials: true })
        .then(res => {
          setIsAdmin(res.data.user.role === "Admin");
        })
        .catch(() => setIsAdmin(false));
    } else {
      setIsAdmin(false);
    }
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 shadow-md ">
      <div className="flex flex-col md:flex-row mx-3 xl:mx-10 justify-between items-center font-[Kodchasan] py-4 md:py-6 relative">
        {/* Hamburger and nav */}
        <div className="absolute left-4 top-4 md:static md:order-2 md:ml-auto z-20">
          <NavElem mobileLeft />
        </div>
        <div className="flex flex-col items-center w-full md:w-fit xl:w-56 md:order-1 gap-0 md:gap-4">
          <h1 className="text-2xl xl:text-4xl text-white font-bold tracking-wide drop-shadow-lg text-center md:text-left">
            Grubstake
          </h1>
        </div>
      </div>
      {isAdmin && <AdminNav />}
    </header>
  );
};

export default Header;
