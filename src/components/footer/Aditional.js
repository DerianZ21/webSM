import React from 'react';
import { Link } from 'react-router-dom';

function Aditional() {
  return (
    <div className='aditional'>
      <div className='marca'>
        <Link to="/about">
          <img className='logo-footer' src='../images/imagesLogo/SeguridadManrique.jpg' alt="Logo Seguridad Manrique" />
        </Link>
        <p>Porque estamos seguros de los que hacemos</p>
      </div>
      <div className='menu-footer'>
        <ul >
          <li>
            <p>inf adicional</p>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">vacio </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">vacio </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> vacio</a>
          </li>
          <li>
            <p>inf adicional</p>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">vacio</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">vacio</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">vacio</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">vacio</a>
          </li>
          <li>
            <p>inf adicional</p>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">vacio</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">vacio</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Aditional;