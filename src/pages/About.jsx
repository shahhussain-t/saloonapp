import React from 'react';
import { heroImg } from '../assets';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CTA = () => {
  return (
    <>
      <Navbar />
      <div className='w-full pt-12 md:pt-24 bg-[#212121] px-4 md:px-16'>
        <div className='md:max-w-[1480px] mx-auto grid md:grid-cols-2 gap-8 items-center'>
          <img
            src={heroImg}
            className='w-full mx-auto md:max-w-none'
            alt='Hero Image'
          />
          <div className="mb-8 md:mb-0">
            <h1 className='py-2 text-2xl md:text-3xl lg:text-4xl text-white font-semibold'>
              Join <span className='text-[#C7B40B]'>World's largest</span> Hair Saloon today
            </h1>
            <p className='py-2 text-base md:text-lg text-[#C7B40B]'>
              Welcome to Choppers Hair Saloon, where convenience meets style. Our app connects you with top-notch salons and stylists for a hassle-free booking experience. Download now and discover a world of beauty at your fingertips!
            </p>
            <button className='px-5 py-2 border-2 rounded-3xl text-white font-bold'>
              Join Now!
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CTA;
