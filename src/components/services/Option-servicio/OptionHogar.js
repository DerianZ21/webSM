import React from 'react';
import preventividad from '../../../assets/images/icon/preventividad.png'
import integridad from '../../../assets/images/icon/integridad-hogar.png'
import gestionabildiad from '../../../assets/images/icon/gestionabilidad.png'
import hogar from '../../../assets/images/nuestras/hogar.webp'


function OptionHogar() {

  return (
    <div id='hogar'>
      <div className='texto-hogar'>
        <h1>SISTEMAS DE SEGURIDAD PARA EL HOGAR</h1>
        <p>Protege Tu Hogar y a Tus Seres Queridos con Sistemas de Seguridad Avanzados</p>
      </div>
      <div className='contenido-hogar'>
        <div className='lista-beneficios'>
          <div className='info-hogar'>
            <img src={preventividad} alt='preventividad'></img>
            <div>
              <h3>PREVENTIVIDAD
              </h3>
              <p>Previene activamente incidentes de seguridad antes de que ocurran.
              </p>
            </div>
          </div>
          <div className='info-hogar'>
            <img src={integridad} alt='integridad'></img>
            <div>
              <h3>INTEGRIDAD
              </h3>
              <p>Completos, precisos y fiables para la protección efectiva de los miembros de tu hogar.
              </p>
            </div>
          </div>
          <div className='info-hogar'>
            <img src={gestionabildiad} alt='gestion'></img>
            <div>
              <h3>GESTIONABILIDAD
              </h3>
              <p>Control, configuración y monitoreo de tus sistemas de seguridad domésticos con el apoyo de la texnología.
              </p>
            </div>
          </div>
        </div>
        <div className='contenedor-img-hogar'>
          <img src={hogar} alt='hogar'>
          </img>
        </div>
      </div>
    </div>
  )
}

export default OptionHogar;