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
          These are some of the things clients and friends say about me and the services I render
        </p>
      </div>
      <TestimonialSlider />
    </div>
  </section>
);

export default Testimonials;
