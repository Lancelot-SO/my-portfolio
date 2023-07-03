import React from 'react';
import { social } from '../data';

const Socials = () => (
  <ul className="flex space-x-6">
    {social.map((item, index) => (
      <li
        className="flex justify-center
              items-center text-accent"
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        <a className="text-base" href={item.href} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </a>
      </li>
    ))}
  </ul>
);

export default Socials;
