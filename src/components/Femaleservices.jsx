import React from 'react';
import Card from './Card';
import Slider from 'react-slick';
import { Female } from '../data/Female';

const Femaleservices = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className='w-full bg-[#ECD8BD] py-16 font-sans px-4 md:px-0 overflow-x-hidden'>
      <div className='md:max-w-[1480px] m-auto max-w-screen-lg px-4 md:px-0'>
        <div className='py-4'>
          <h1 className='py-3 text-3xl font-bold text-center'>
            Special <span className='text-[#7D5620]'>Beautiness</span> Services for Females
          </h1>
          <p className='text-[#7D5620] text-center'>Treat yourself to our services for all ages.</p>
        </div>

        <div className='px-4 md:px-0'>
          <Slider {...settings}>
            {Female.map((course, i) => (
              <div key={i}>
                <Card course={course} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Femaleservices;
