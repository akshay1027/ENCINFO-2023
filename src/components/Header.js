import React, { useState } from 'react';

// import icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">ECE</span>
          <div className="flex space-x-4 text-gray-900">
            <a href="#">About</a>
            <a href="#">Workshop</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
