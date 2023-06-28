import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => (window.scrollY > 50 ? setBg(true) : setBg(false)));
  });
  return (
    <header className={`${bg ? 'bg-tertiary h-20'
      : 'h-24'} flex items-center fixed top-0 w-full
           text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto
            h-full flex items-center justify-between"
      >
        {/* logo */}
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* NavMobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
