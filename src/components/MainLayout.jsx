import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      <div className='flex flex-col h-fit'>
        <Header />
        <Outlet />  {/* This is where the nested routes will be rendered */}
      </div>
      <Footer />
    </div>
    </>
  );
};

export default MainLayout;
