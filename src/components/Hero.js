import React from 'react';
import bg from '../assets/img/profile.png';
import resumePDF from '../assets/img/My-resume.pdf';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'My-resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
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
            <button
              type="button"
              className="btn btn-md bg-accent
            hover:bg-accent-hober md:btn-lg
            transition-all"
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
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
};

export default Hero;
