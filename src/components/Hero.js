import React from 'react';
import bg from '../assets/img/bgg.webp';

const Hero = () => (
  <section
    id="home"
    className="lg:h-[85vh] flex
    items-center bg-primary lg:bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
  >
    <div className="container mx-auto h-full">
      <div className="flex items-center h-full
          pt-8"
      >
        {/* left side */}
        <div className="flex-1 flex flex-col
          items-center lg:items-start"
        >
          <p className="text-lg text-accent mb-[5px] mt-[30px]">Hey, I am Felix 👋</p>
          <h2 className="text-3xl leading-[40px]
            md:text-5xl md:leading-tight lg:text-6xl
            lg:leading-[1.2] font-500 md:tracking-[-2px]"
          >
            I am a UI/UX Designer &
            {' '}
            <br />
            {' '}
            Full-stack Web Developer
          </h2>
          <p className="pt-4 pb-8 md:pt-6 md:pb-12
            max-w-[480px] text-lg texxt-center
            lg:text-left"
          >
            Take a moment to explore my portfolio and experience!
            If my work resonates with you and you require assistance with a project,
            I am readily available for hire.
          </p>
          <a href="https://docs.google.com/document/d/1_ukWXYUCHXQxC2zo6xDNGt9TXvRF0d0yU3OHZNyyNZI/edit" target="_blank" rel="noopener noreferrer">
            <button
              type="submit"
              className="btn btn-md bg-accent
            hover:bg-accent-hober md:btn-lg
            transition-all"
            >
              Download CV
            </button>
          </a>
        </div>
        {/* right side */}
        <div
          className="hidden lg:flex flex-1
          justify-end items-end h-full"
        >
          <img src={bg} alt="background" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
