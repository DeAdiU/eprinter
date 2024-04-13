import React from 'react';
import {ReactTyped,Typed} from 'react-typed';
const Hero = () => {
  return (
    <div className='text-white' id='home'>
      <div className='max-w-[1280px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
        REVOLUTIONIZING PRINTING TECHNOLOGY
        </p>
        <h1 className='l:text-2xl md:text-4xl sm:text-3xl text-4xl font-bold md:py-6'>
        Get your documents printed in one click.
        </h1>
        <div className='flex justify-center items-center'>
          <p className=' md:text-2xl text-l font-bold py-4'>
          Fast, flexible printing Options for
          </p>
          <ReactTyped
          className='md:text-2xl text-xl font-bold md:pl-3 pl-2'
            strings={['Colour Prints','Black and White','A4/A3/Letter']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
       
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' >Get Started</button>
       
      </div>
    </div>
  );
};

export default Hero;