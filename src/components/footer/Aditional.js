import React from 'react';
import { Link } from 'react-router-dom';

function Aditional() {
  return (
    <div className='aditional'>
      <div className='marca'>
        <Link to="/">
          <img className='logo-footer logo-footer-MS' src='../images/imagesLogo/logo-texto.svg' alt="Logo Seguridad Manrique" />
        </Link>
        <a href='http://www.pinlet.net/'>
          <img className='logo-footer logo-footer-pinlet' src='../images/imagesLogo/pinlet-texto.svg' alt="Logo Pinlet " />
        </a>
      </div>
      <div className='menu-footer'>
        <ul >
          <li>
            <h3>CONTACTOS</h3>
            <hr></hr>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">info@pinlet.net </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">+593939858060</a>
            <a href="https://www.google.com/maps/@-2.1731576,-79.8784404,16z?entry=ttu"
              target="_blank"
              rel="noopener noreferrer">
              <img className='icono icono-ubicacion' src='/images/iconosSVG/ubicacion.svg' alt='icono de ubicacion'></img>
              <p>Ecuador, Guayaquil.</p>
            </a>
          </li>
          <li>
            <h3>SERVICIO AL CLIENTE</h3>
            <hr></hr>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">pinletdev64pinlet.net</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">+593968253695</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aditional;