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
import { Route, Router } from 'react-router-dom';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    // <div className='overflow-hidden'>
    <Router>
      <Route path='/' element={<Header />} />
      <Route path='/' element={<Hero />} exact />
      <Route path='/' component={About} exact />
      <Route path='/' component={Workshop} exact />
      <Route path='/' component={Events} exact />
      <Route path='/' component={Footer} exact />

      <Route path='/workshop' component={Workshop} exact />
    </Router>
    // </div>
  );
};

export default App;

{/* <Header />
      <Hero />
      <About />
      <Workshop />
      <Events />
      <Footer /> */}

