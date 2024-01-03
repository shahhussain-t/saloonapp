import React from 'react';
import Card from './Card';
import Slider from 'react-slick';
import { Male } from '../data/Male';

const Maleservices = () => {
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full bg-[#ECD8BD] py-16 font-sans px-4 md:px-0 overflow-x-hidden'>
      <div className='md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0'>
        <div className='py-4'>
          <h1 className='py-3 text-3xl font-bold text-center'>
            Special <span className='text-[#7D5620]'>Hair Styles</span> Services for Males
          </h1>
          <p className='text-[#7D5620] text-center'>Treat yourself to our services for all ages.</p>
        </div>

        <div className='px-2 md:px-0'>
          <Slider {...settings}>
            {Male.map((course, i) => (
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

export default Maleservices;
