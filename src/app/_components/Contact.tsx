// @ts-nocheck

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';

export const ContactUs = () => {
  
  const [loading, setLoading] = React.useState(false)


  const handleCopyEmail = () => {
    const email = 'infinitesako@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('infinitesako@gmail.com copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
      });
  };
  
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs
      .sendForm('service_fkls39b', 'template_tajrmtk', form.current, 'U0-vsdBLYCuJ0EU74')
      .then(
        () => {
          setLoading(false);
          console.log('SUCCESS!');
          alert('Your message has been successfully sent!');
          form.current.reset();
          
        },
        (error) => {
          setLoading(false); 
          console.log('FAILED...', error.text);
          
        },
      );
  };

  return (
    
    <div className='items-center justify-center flex text-center flex-col pb-32 bg-[#e0f4fb]'>
      <h1 className='font-bold text-[3rem] mt-32'>Contact</h1>
      <p className='w-[700px] font-semibold md+:w-[350px]'>Send me a message and I'll get back to you as quickly as possible! You can also use my email at <button className='text-blue-600 underline' onClick={handleCopyEmail}>infinitesako@gmail.com</button></p>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-10 md+:w-[20rem] w-[50rem] gap-3'>
      <input type="text" placeholder="Name"  name="from_name" className='border-[1px] border-black p-2 bg-gray-100 focus:outline-double' />
      <input type="email" placeholder='Email' name="from_email" className='border-[1px] border-black p-2 bg-gray-100 focus:outline-double'/>
      <textarea name="message" placeholder='Message' className='border-[1px] border-black p-2 h-48 resize-none bg-gray-100 focus:outline-double' />
      <input type="submit" value={loading ? 'Processing...' : 'Send'} className={`border-[1px] rounded-md border-black text-[1.2rem] px-5 py-2 self-center mt-4 ${loading ? 'bg-blue-400 loadingIcon' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'} text-gray-100 font-semibold`} />
    </form>
    </div>
  );
};