import React from 'react';
import { skills } from '../data';

const Skills = () => (
  <section className="bg-tertiary py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-8
        md:grid-flow-row"
      >
        {skills.map((skill, index) => (
          <div
            className="flex items-center
                    justify-center"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <img src={skill.image} alt="skill" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
