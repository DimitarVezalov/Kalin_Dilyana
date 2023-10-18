import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work, Location, Pricing } from './container';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Pricing />
      <Work />
      {/* <Skills /> */}
      <Testimonial />
      <Footer />
      <Location />
    </div>
  );
}

export default App;