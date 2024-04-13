import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='max-w-[1536px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' id='footer'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ePrinter.</h1>
        <p className='py-4'>The ultimate site to get your document printed without waiting in a long queue for a long time.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <a href='https://www.instagram.com/'><FaInstagram size={30} /></a>
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
      </div>
    </div>
  );
};


export default Footer;