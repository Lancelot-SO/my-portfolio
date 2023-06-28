import React from 'react';
import { social } from '../data';
import logo from '../assets/img/logo.svg';

const Footer = () => (
  <footer className="bg-tertiary py-12">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row
        space-y-6 lg:space-y-0 items-center
        justify-between"
      >
        {/* Social Links */}
        <div className="flex space-x-6
            items-center justify-center"
        >
          {social.map((item, index) => {
            const { href, icon } = item;
            return (
              <a
                className="text-accent
                        text-base"
                href={href}
                target="_blank"
                rel="noreferrer"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                {icon}
              </a>
            );
          })}
        </div>

        <div>
          <img src={logo} alt="logo" />
        </div>

        <p>&copy; 2023 Felix Adjei Sowah. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
