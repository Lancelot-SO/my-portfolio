import React from 'react';
import { contact } from '../data';

const Contact = () => {
  return (
    <section className='section bg-primary'
    id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center
        text-center'>
            <h2 className='section-title
            before:content-contact relative
            before:absolute before:opacity-40
            before:-top-7 before:-left-40 before:hidden
            before:lg:block'>
                Contact Me
            </h2>
            <p className='subtitle'>
            Lorem ipsum dolor, sit amrt consectetur
            adipsicing elit. Facilis,
            quis add.
            </p>
        </div>

        <div className='flex flex-col lg:gap-x-8
        lg:flex-row'>
            <div className='flex flex-1 flex-col
            items-start space-y-8 mb-12 lg:mb-0lg:pt-2'>
                {contact.map((item, index) => {
                    const { icon, title, subtitle, description} = item;
                    return (
                        <div className='flex flex-col
                        lg:flex-row gsp-x-4' key={index}>
                            <div className='test-accent
                            rounded-sm w-14 h-14 flex items-start
                            justify-center mt-2 mb-4 lg:mb-0
                            text-2xl'>
                                {icon}
                            </div>
                            <div>
                                <h4 className='font-body text-xlmb-1'>{title}</h4>
                                <p className='mb-1'>{subtitle}</p>
                                <p className='text-accent
                                font-bold'>{description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <form action="https://formspree.io/f/mzblpvvq" method="POST"
            className='space-y-8 w-full max-w-[780px]'>
                <div className='flex gap-8'>
                    <input className='input' type="text" 
                    placeholder="Your name" name='Name' />
                    <input className='input' type="email" 
                    placeholder="Your email" name='Email' />
                </div>
                <input className='input' type="text" 
                placeholder="Subject" name='Subject'/>
                <textarea className='textarea' 
                placeholder='Your message' name='Message'></textarea>
                <button className='btn btn-lg bg-accent
                hover:bg-accent-hover'>
                    Send message
                </button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
