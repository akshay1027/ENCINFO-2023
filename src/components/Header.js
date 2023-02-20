import React from 'react';

import ptuLogo from '../assets/img/ptuLogo.png';

//try
import About from './About';

// import icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
  
  return (
    <nav className="sticky top-0 z-20 bg-white dark:bg-slate-900 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-left justify-between h-16">
        <a href="/" class="flex items-left">
        <img src={ptuLogo} class="h-16 mr-3 sm:h-16" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white lg:invisible md:visible sm:visible">PTU-ECE</span><span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white invisible lg:visible">PUDUCHERRY TECHNOLOGICAL UNIVERSITY-ECE</span>
    </a>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
