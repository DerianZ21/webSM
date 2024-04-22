import React from 'react';
import disponibilidad from '../../../assets/images/icon/24-7.png'
import camara from '../../../assets/images/icon/camara.png'
import central from '../../../assets/images/icon/central.png'
import comunicacion from '../../../assets/images/icon/comunicacion.png'
import infoMonitoreo from '../../../assets/images/nuestras/infoMonitoreo.png'


function OptionMonitoreo() {
 

  return (
    <div id='monitoreo'>
      <h1>CENTRAL DE MONITOREO</h1>
      <div id='info-monitoreo'>
        <div className='main-info-monitoreo'>
          <div>
            <div className='contenedor-img-monitoreo'>
              <img src={disponibilidad} alt='47/7'></img>
            </div>
            <p>Opera la 24 horas, los 365 dias</p>
          </div>
          <div>
            <div className='contenedor-img-monitoreo'>
              <img src={camara} alt='camara'></img>
            </div>
            <p>Implementación de equipos tecnologicos</p>
          </div>
          <div>
            <div className='contenedor-img-monitoreo'>
              <img src={central} alt='central'></img>
            </div>
            <p>Centralista durante el dia y noche</p>
          </div>
          <div>
            <div className='contenedor-img-monitoreo'>
              <img src={comunicacion} alt='comunicación'></img>
            </div>
            <p>Comunicación directa con todo el personal de seguridad</p>
          </div>
        </div>
        <div className='info-extra-monitoreo'>
          
          <img src={infoMonitoreo}></img>
        </div>
      </div>
    </div>
  )
}

export default OptionMonitoreo;

