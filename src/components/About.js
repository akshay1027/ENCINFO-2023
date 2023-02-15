import React, { useRef } from 'react';

// import about data
import { aboutData } from '../data';

const About = () => {
  // destructure about
  const { image, title, subtitle } = aboutData;

  return (
    <section
      className='my-[30px] mt-[100px]'
      data-aos='fade-up'
      data-aos-offset='350'
      id="#About"

    >
      <div className='container mx-auto'>
        <div className='bg-green-100 rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          <div className='flex-1' data-aos='zoom-in-left'>
            <img className="border-white" src={image} alt='' />
          </div>
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-10 font-bold text-3xl dark:text-gray-400' data-aos='fade-left' data-aos-delay='300'>
              {title}
            </h2>
            <p
              className='max-w-[474px] font-medium mx-auto xl:mx-0 dark:text-gray-400'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
