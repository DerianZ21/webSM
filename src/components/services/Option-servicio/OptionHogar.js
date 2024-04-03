import React from 'react';


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
            <img src='/images/iconos-png/preventividad.png' alt='preventividad'></img>
            <div>
              <h3>PREVENTIVIDAD
              </h3>
              <p>Previene activamente incidentes de seguridad antes de que ocurran.
              </p>
            </div>
          </div>
          <div className='info-hogar'>
            <img src='/images/iconos-png/integridad-hogar.png' alt='integridad'></img>
            <div>
              <h3>INTEGRIDAD
              </h3>
              <p>Completos, precisos y fiables para la protección efectiva de los miembros de tu hogar.
              </p>
            </div>
          </div>
          <div className='info-hogar'>
            <img src='/images/iconos-png/gestionabilidad.png' alt='gestion'></img>
            <div>
              <h3>GESTIONABILIDAD
              </h3>
              <p>Control, configuración y monitoreo de tus sistemas de seguridad domésticos con el apoyo de la texnología.
              </p>
            </div>
          </div>
        </div>
        <div className='contenedor-img-hogar'>
          <img src='/images/imagenesNuestras/hogar.webp' alt='hogar'>
          </img>
        </div>
      </div>
    </div>
  )
}

export default OptionHogar;