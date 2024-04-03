import React from 'react';
import '../../styles/home/description.css'

function Description() {
  return (
    <div className='main-description'>
      <div className='inicio'>
        <div className='marca-inicio'>
          <img src='../images/imagesLogo/SeguridadManrique.jpg' className='logo-inicio' alt='logo'>
          </img>
          <img src='../images/imagesLogo/logo-texto.svg' className='name-inicio' alt='nombre de la empresa'>
          </img>
        </div>
        <div className='slogan-inicio'>
          <p>Porque estamos seguros de lo que hacemos</p>
        </div>
      </div>
      <div>
        <img src='../images/diseños/camara-seguridad.webp' className='img-inicio' alt='cámara de seguridad'></img>
      </div>
    </div>

  );
}

export default Description;