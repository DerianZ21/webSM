import React from 'react';
import Carousel from './Carousel';
import OptionsServicio from './OptionsServicio';
import Sections from './Sections';
function Services() {
  return (
    <div className='main-services'>
      <h1>NUESTROS SERVICOS</h1>
      <Carousel />
      <OptionsServicio/>
      <Sections />
    </div>
  );
}

export default Services;