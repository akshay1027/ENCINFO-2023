import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Workshop from './components/Workshop';
import Events from './components/events';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      {/* <Testimonials /> */}
      <About />
      <Workshop /> 
      <Events />
      <Footer />
    </div>
  );
};

export default App;
