import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/HomeCom/NavBar';
import Info from '../Components/HomeCom/Info';
import Footer from '../Components/HomeCom/Footer';
import ScrollToTop from '../Pages/ScroolTop';
import Join from '../Components/HomeCom/Join';
import Partnership from '../Components/HomeCom/Paterns';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Info />
        <div className="bg-white shadow-sm">
          <NavBar />
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow mt-[calc(40px+5.5rem)]">
        <Outlet />
      </main>

      {/* Pre-Footer Sections with Dividers */}
      <section className="relative">
        {/* Join Section */}
        <div className="bg-white relative z-10">
          <Join />
        </div>
        
        {/* Partners Section */}
        <div className="bg-gray-50">
          <Partnership />
        </div>

        {/* Decorative Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout; 