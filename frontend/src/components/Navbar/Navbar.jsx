import React, { useState } from 'react';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute w-full top-0 left-0 z-10 bg-transparent">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
        <div>
          <span className="w-48 h-32 cursor-pointer logo text-2xl font-bold">Medi Track</span>
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-transparent md:min-h-fit min-h-[60vh] left-0 top-${isMenuOpen ? '0' : '-100%'} md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Dashboard</a>
            </li>
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Patients</a>
            </li>
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Appointments</a>
            </li>
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Reports</a>
            </li>
            <li>
              <a className="hover:text-blue-500 font-semibold" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full button-hover">
            Login/Signup
          </button>
          <ion-icon
            onClick={toggleMenu}
            name={isMenuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

