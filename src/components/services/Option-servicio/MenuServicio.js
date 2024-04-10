import React from 'react';
import "../../../styles/services/menuservicio.css"
import monitoreo from '../../../assets/images/icon/monitoreo.svg'
import hogar from '../../../assets/images/icon/hogar.svg'
import oficina from '../../../assets/images/icon/oficina.svg'
import pinlet from '../../../assets/images/logo/pinlet.png'

function MenuServicio({onOptionClick }) {
  return (
    <div className='main-menu-servicio'>
      <button className="boton svg" onClick={() => onOptionClick('monitoreo')} >
        <img src={monitoreo} alt="Monitoreo" />
      </button>
      <button className="boton svg" onClick={() => onOptionClick('hogar')} >
        <img src={hogar} alt="Hogar" />
      </button>
      <button className="boton svg" onClick={() => onOptionClick('oficina')} >
        <img src={oficina} alt="Oficina" />
      </button>
      <button className="boton png" onClick={() => onOptionClick('pinlet')}>
        <img src={pinlet} alt="Pinlet" />
      </button>
    </div>
  );
}

export default MenuServicio;