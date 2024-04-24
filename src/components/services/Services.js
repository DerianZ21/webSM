import React from 'react';
import Carousel from './Carousel';
import Deslizador from './Deslizador';
import OptionsServicio from './Option-servicio/OptionsServicio';
import Sections from './Sections';
function Services() {
  
  return (
    <div className='main-services'>
      <h1>NUESTROS SERVICOS</h1>
      <Carousel />
      <OptionsServicio/>
      <Deslizador/>
      <Sections />
    </div>
  );
}

export default Services;