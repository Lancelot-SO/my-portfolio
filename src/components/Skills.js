import React from 'react';
import { skills } from '../data';

const Skills = () => (
  <section className="bg-tertiary py-12">
    <div className="container mx-auto">
      <h2 className="text-center mb-8 text-4xl font-bold">Tools</h2>
      <div className="flex flex-row flex-wrap md:gap-8 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center">
        {skills.map((skill, index) => (
          <div
            className="flex flex-col items-center justify-center mb-6"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <img src={skill.image} alt="skill" className="w-10 h-10" />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-6 justify-center">
        <h2 className="font-bold mb-2 mt-1 pr-2">Skills: </h2>
        <ul className="flex flex-wrap items-center justify-center">
          <li className="mr-2 mb-3 rounded-full bg-accent text-white px-3 py-1">Communication</li>
          <li className="mr-2 mb-3 rounded-full bg-accent text-white px-3 py-1">Teamwork</li>
          <li className="mr-2 mb-3 rounded-full bg-accent text-white px-3 py-1">Remote Programming</li>
          <li className="mr-2 mb-3 rounded-full bg-accent text-white px-3 py-1">Collaboration</li>
          <li className="mr-2 mb-3 rounded-full bg-accent text-white px-3 py-1">System Testing</li>
          <li className="mr-2 mb-3 rounded-full bg-accent text-white px-3 py-1">Api Documentation</li>
          <li className="mr-2 mb-3 rounded-full bg-accent text-white px-3 py-1">RESTful API</li>
          <li className="mr-2 mb-3 rounded-full bg-accent text-white px-3 py-1">Project Management</li>
          <li className="mb-3 rounded-full bg-accent text-white px-3 py-1">Database Design</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
