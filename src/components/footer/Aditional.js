import React from 'react';
import { Link } from 'react-router-dom';

function Aditional() {
  return (
    <div className='aditional'>
      <div className='marca'>
        <Link to="/">
          <img className='logo-footer' src='../images/imagesLogo/SeguridadManrique.jpg' alt="Logo Seguridad Manrique" />
        </Link>
        <a href='http://www.pinlet.net/'>
          <img className='logo-footer' src='../images/imagesLogo/pinlet.png' alt="Logo Pinlet " />
        </a>
      </div>
      <hr></hr>
      <div className='menu-footer'>
        <ul >
          <li>
            <p>CONTACTOS</p>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">info@pinlet.net </a>
            <p>+593939858060 </p>
            <a href="https://www.google.com/maps/@-2.1731576,-79.8784404,16z?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer">Ecuador, Guayaquil.</a>
          </li>
          <li>
            <p>SERVICIO AL CLIENTE</p>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">pinletdev64pinlet.net</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">+593968253695</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aditional;