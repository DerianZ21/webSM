import React from 'react';
import Carousel from './Carousel';
import MenuScrool from './MenuScrool';
import Details from './detail/Details';
function Services() {
  return (
    <div className='main-services'>
      <h1>NUESTROS SERVICOS</h1>
      <Carousel />
      <MenuScrool />
      <Details />
    </div>
  );
}

export default Services;