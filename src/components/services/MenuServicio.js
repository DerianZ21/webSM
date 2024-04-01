import React from 'react';
import "../../styles/services/menuservicio.css"

function MenuServicio({onOptionClick }) {
  return (
    <div className='main-menu-servicio'>
      <button className="boton svg" onClick={() => onOptionClick('monitoreo')} >
        <img src="../images/iconosSVG/monitoreo.svg" alt="Monitoreo" />
      </button>
      <button className="boton svg" onClick={() => onOptionClick('hogar')} >
        <img src="../images/iconosSVG/hogar.svg" alt="Hogar" />
      </button>
      <button className="boton svg" onClick={() => onOptionClick('oficina')} >
        <img src="../images/iconosSVG/oficina.svg" alt="Oficina" />
      </button>
      <button className="boton png" onClick={() => onOptionClick('pinlet')}>
        <img src="../images/imagesLogo/pinlet.png" alt="Pinlet" />
      </button>
    </div>
  );
}

export default MenuServicio;