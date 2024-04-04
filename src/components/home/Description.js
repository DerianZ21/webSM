import React from 'react';
import '../../styles/home/description.css'

function Description() {
  return (
    <div className='main-description'>
      <div className='inicio'>
        <div className='marca-inicio'>
          <img src='../images/imagesLogo/SeguridadManrique-sinfondo.png' className='logo-inicio' alt='logo'>
          </img>
          <img src='../images/imagesLogo/logo-texto.svg' className='name-inicio' alt='nombre de la empresa'>
          </img>
        </div>
        <div className='slogan-inicio'>
          <p>Porque estamos seguros de lo que hacemos</p>
        </div>
      </div>
      <div className='img-inicio'>
        <img src='../images/imagenesNuestras/fondo-inicio.webp' alt='imagen de inicio'>

        </img>
      </div>
    </div>

  );
}

export default Description;