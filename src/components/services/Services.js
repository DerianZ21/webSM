import React from 'react';
import Carousel from './Carousel';
import MenuSection from './MenuSection';
import Sections from './Sections';
function Services() {
  return (
    <div className='main-services'>
      <h1>NUESTROS SERVICOS</h1>
      <Carousel />
      <MenuSection/>
      <Sections />
    </div>
  );
}

export default Services;