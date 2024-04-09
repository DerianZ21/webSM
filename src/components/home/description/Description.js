import React from 'react';
import CarouselDescription from './CarouselDescription'
import '../../../styles/home/description.css'

function Description() {
  return (
    <div className='main-description'>
      <div className='inicio'>
        <img src='../images/imagesLogo/SeguridadManrique-sinfondo.png' className='logo-inicio' alt='logo'>
        </img>
        <div className='slogan-inicio'>
          <p>Porque estamos seguros de lo que hacemos</p>
        </div>
      </div>
      <CarouselDescription />
    </div>

  );
}

export default Description;