import React from 'react';
import { heroImg } from '../assets';

const Hero = () => {
  return (
    <div className='w-full bg-[#212121] py-12 md:py-24 px-4 md:px-16'>
      <div className='md:max-w-[1480px] mx-auto flex flex-col md:flex-row items-center'>
       
        <div className='w-full md:w-1/2'>
          <p className='text-base text-[#C7B40B] font-medium font-sansita'>
            Welcome to Choppers
          </p>
          <h1 className='text-3xl md:text-5xl text-white font-montserrat font-semibold capitalize mt-4 md:mt-0'>
            Best Hair Salon for a Professional Look
          </h1>
          <p className='py-4 text-white text-lg font-poppins font-normal'>
            Choppers offers high-performance customized facials to provide you
            with visible results
          </p>

          <form className='bg-white border p-2 input-box-shadow rounded-full flex items-center'>
            <div className='flex-1 relative'>
              <input
                className='w-full outline-none text-black px-4 py-2 rounded-full pl-10' 
                type='text'
                placeholder='Search here'
              />
              <button type='submit' className='absolute left-0 top-0 mt-2 ml-2'> 
              </button>
            </div>
          </form>
        </div>
        <div className='w-full md:w-1/2 md:mt-8 md:ml-0 mt-8'>
          <img src={heroImg} alt='Hero Image' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
