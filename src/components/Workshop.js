import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

// import about data
import { WorkshopData } from '../data';

const Workshop = () => {
  // destructure about
  const { image, title, subtitle } = WorkshopData;
  let myref = useRef();
  return (
    <section
      className='my-[30px] mt-[100px]'
      data-aos='fade-down'
      data-aos-offset='350'
      id="#About"
      ref={myref}
    >
      <div className='container mx-auto'>
        <div className='bg-violet-100 rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          <div className='flex-1' data-aos='zoom-in-right'>
            <img src={image} alt='' />
          </div>
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-10 font-bold text-3xl' data-aos='fade-left' data-aos-delay='300'>
              {title}
            </h2>
            <p
              className='max-w-[474px] mx-auto xl:mx-0'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {subtitle}
            </p>
            <a href="/workshop">
              <button class="bg-violet-400 hover:bg-violet-700 mt-10 text-white font-bold py-2 px-4 rounded-full">
                Know More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;