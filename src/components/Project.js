import React, { useState } from 'react';

/* eslint-disable */
const Project = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center ml-10"
    >
      <div className="mb-8">
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          <img className="rounded-2xl" src={item.image} alt="project" />
        </a>
      </div>
      <p className="capitalize text-accent text-sm mb-3">
        {item.category}
      </p>
      <h3 className="text-2xl font-semibold capitalize mb-3">
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.name}
        </a>
      </h3>
      <p>
        <a href={item.git} target="_blank" rel="noopener noreferrer">
          {item.github}
        </a>{' '}
      </p>
      <button
        onClick={togglePopup}
        className="mt-4 bg-accent text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-300"
      >
        Details
      </button>
      
      {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg mx-4 md:mx-auto w-full max-w-md overflow-y-auto">
      <button
        onClick={togglePopup}
        className="absolute top-0 right-0 mt-2 mr-2 bg-accent text-white px-2 py-1 rounded hover:bg-primary-dark transition duration-300"
      >
        X
      </button>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <img className="rounded-lg w-40 h-40 object-cover mr-4" src={item.image} alt="project" />
          <img className="rounded-lg w-40 h-40 object-cover" src={item.screen} alt="screenshot" />
        </div>
        <div className="mt-4">
          <p className="text-accent">{item.details}</p>
          <div className="mt-2 flex items-center justify-center">
            <h4 className="font-semibold text-accent">Tech Stack:</h4>
            <ul className="flex ml-2 justify-center">
              <li className="mr-2">{item.techstack1}</li>
              <li className="mr-2">{item.techstack2}</li>
              <li>{item.techstack3}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)}










    </div>
  );
};

export default Project;
