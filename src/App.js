import React, { useState, useEffect } from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Workshop from './components/Workshop';
import Events from './components/events';
import Culturalevents from './components/Culturalevents';
import Nontechnicalevents from './components/Nontechnicalevents';
import Literaryevents from './components/Literaryevents';
import Esportsevents from './components/Esportsevents';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Googleform from './components/googleformtest';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  // dark theme
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('light');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className='overflow-hidden dark:bg-gray-900'>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-50 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
      <Header />
      <Routes>
        <Route exact path='/' element={
          <>
            <Hero />
            <About />
            <Workshop />
            <Events />
            <Culturalevents />
            <Nontechnicalevents />
            <Literaryevents />
            <Esportsevents />
          </>
        }
        />

        <Route exact path='/workshop' element={<Googleform />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
