import React from 'react';

// import hero data
import { heroData } from '../data';
import LogoImg from '../assets/img/logo.png';

const Hero = () => {
  // destructure hero
  // bg-gradient-to-r from-green-400 to-blue-500
  // bg-gradient-to-r from-cyan-200 to-blue-200
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section class="pt-24 pb-24 bg-gradient-to-r from-slate-100 to-indigo-200 dark:bg-gradiet-to-r dark:from-slate-900 dark:to-indigo-900">
      <div data-aos='fade-down' data-aos-delay='600'>
        <div class="px-12 mx-auto max-w-7xl">
          <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-slate-800 md:text-6xl md:tracking-tight">
              <span className="dark:text-white">{title}</span> | <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r  from-blue-700 to-sky-400 lg:inline  dark:bg-clip-text dark:bg-gardient-to-r dark:from-lightblue-400 dark:to-grey-200">{subtitle}</span>
            </h1>
            {/* <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              
            </p> */}
            <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
              
            </div>
          </div>
          <div class="w-full mx-auto mt-20 text-center md:w-10/12">
            <div class="relative z-0 w-full mt-8">
              <div class="relative overflow-hidden shadow-2xl">
                <div class="flex items-center flex-none px-4 bg-slate-800 dark:bg-gray-500 rounded-b-none h-11 rounded-xl">
                  <div class="flex space-x-1.5">
                    <div class="w-3 h-3 border-2 border-white dark:border-black rounded-full"></div>
                    <div class="w-3 h-3 border-2 border-white dark:border-black rounded-full"></div>
                    <div class="w-3 h-3 border-2 border-white dark:border-black rounded-full"></div>
                  </div>
                </div>
                <div data-aos='fade-up' data-aos-delay='800'>
                  <img alt="" src={LogoImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
export default Hero;