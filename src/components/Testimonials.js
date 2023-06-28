import React from 'react';
import TestimonialSlider from './TestimonialSlider';

const Testimonials = () => (
  <section
    id="testimonials"
    className="section
    bg-secondary"
  >
    <div className="container mx-auto">
      <div className="flex flex-col items-center
        text-center"
      >
        <h2 className="section-title
            before:content-testimonials relative
            before:absolute before:opacity-40 before:-top-[2rem]
            before:-left-64 before:hidden
            before:lg:block"
        >
          What other people say
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
      <TestimonialSlider />
    </div>
  </section>
);

export default Testimonials;
