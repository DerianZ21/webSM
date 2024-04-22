import React from 'react';
import CarouselDescription from './CarouselDescription'
import '../../../styles/home/description.css'
import logo from '../../../assets/images/logo/SeguridadManrique-sinfondo.png'


function Description() {
  return (
    <div className='main-description'>
      <div className='inicio'>
        <img src={logo} className='logo-inicio' alt='logo'>
        </img>
        <div className='slogan-inicio'>
          <p>"PORQUE ESTAMOS SEGUROS DE LO QUE HACEMOS"</p>
        </div>
      </div>
      <CarouselDescription />
    </div>

  );
}

export default Description;