import React from 'react';
import Image from '../assets/img/profile.png';

const About = () => (
  <section className="section bg-secondary" id="about">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row
        gap-24"
      >
        <img
          className="object-cover h-full w-[566px]
            md:mx-auto lg:mx-0 rounded-2xl"
          src={Image}
          alt="about"
        />
        <div className="flex flex-col items-center
            text-center lg:text-left"
        >
          <div className="flex flex-col">
            <h2 className="text-3xl lg:text-4xl
                    font-medium lg:font-extrabold mb-3
                    before:content-about relative
                    before:absolute before:opacity-40
                    before:-top-[2rem] before:hidden
                    before:lg:block"
            >
              Felix Sowah
            </h2>
            <p className="mb-4
                  text-accent"
            >
              Full-stack Web Developer
            </p>
            <hr className="mb-8 opacity-5" />
            <p className="mb-8 text-decoration-justify">
              Greetings! I am Felix Adjei Sowah, a passionate
              creative developer specializing in crafting
              visually appealing websites.
              My expertise lies in designing user-friendly
              interfaces and ensuring an exceptional user experience. Coding and web
              development are my true passions, and I constantly strive
              to expand my knowledge and skill set.
              As a relatively new Full-Stack Developer,
              I possess proficiency in JavaScript, React.js, Redux, Ruby on Rails, HTML,
              CSS, Postgresql, and MySQL. Starting from March 2022,
              I have been honing my technical prowess, leadership abilities,
              and collaborative skills at Microverse. During this time,
              I have had the privilege of collaborating and engaging in pair
              programming sessions with talented students from around the globe.
            </p>
          </div>
          <a href="#contact">
            <button
              type="button"
              className="btn btn-md
                bg-accent hover:bg-accent-hover
                transition-all"
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
