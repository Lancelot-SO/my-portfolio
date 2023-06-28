import React from 'react'
import Projects from './Projects'

const Portfolio = () => {
  return (
    <section id='portfolio' className='section
    bg-tertiary min-h-[1400px'>
      <div className='container max-auto'>
        <div className='flex flex-col items-center
        text-center'>
            <h2 className='section-title
            before:content-portfolio relative
            before:absolute before:opacity-40
            before:-top-[2rem] before:-left-3/4
            before:hidden before:lg:block'>
                My latest Work
            </h2>
            <p className='subtitle'>
            Please take a moment to browse through a 
            selection of my recent projects that I have had the opportunity to work on.
            </p>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio
