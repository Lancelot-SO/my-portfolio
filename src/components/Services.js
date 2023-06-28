import React from 'react';
import { services } from '../data';

const Services = () => (
  <section
    id="services"
    className="section
    bg-tertiary"
  >
    <div className="container mx-auto">
      <div className="flex flex-col items-center
        text-center"
      >
        <h2 className="section-title
            before:content-servicces relative
            before:absolute before:opacity-40
            before:-top-[2rem] before:-left-28
            before:hidden before:lg:block"
        >
          What I do for Clients
        </h2>
        <p className="subtitle">
          Lorem ipsum dolor, sit amrt consectetur
          adipsicing elit. Facilis,
          quis add.
          <br />
          Lorem ipsum dolor, sit amrt consectetur
          adipsicing elit. Facilis,
          quis add.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const { icon, name, description } = service;
          return (
            <div
              className="bg-secondary p-6
                    rounded-2xl"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              <div className="text-accent rounded-sm
                        w-12 h-12 flex justify-center
                        items-center mb-24 text-[28px}"
              >
                {icon}
              </div>
              <h4 className="text-xl font-medium
                        mb-2"
              >
                {name}
              </h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
