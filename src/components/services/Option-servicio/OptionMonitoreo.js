import React from 'react';


function OptionMonitoreo (){

    return(
        <div id='monitoreo'>
          <h1>CENTRAL DE MONITOREO</h1>
          <div id='info-monitoreo'>
            <div className='main-info-monitoreo'>
              <div>
                <div className='contenedor-img-monitoreo'>
                  <img src='../images/iconos-png/24-7.png' alt='47/7'></img>
                </div>
                <p>Opera la 24 horas, los 365 dias</p>
              </div>
              <div>
                <div className='contenedor-img-monitoreo'>
                  <img src='../images/iconos-png/camara.png' alt='camara'></img>
                </div>
                <p>Implementación de equipos tecnologicos</p>
              </div>
              <div>
                <div className='contenedor-img-monitoreo'>
                  <img src='../images/iconos-png/central.png' alt='central'></img>
                </div>
                <p>Centralista durante el dia y noche</p>
              </div>
              <div>
                <div className='contenedor-img-monitoreo'>
                  <img src='../images/iconos-png/comunicacion.png' alt='comunicación'></img>
                </div>
                <p>Comunicación directa con todo el personal de seguridad</p>
              </div>
            </div>
            <div className='info-extra-monitoreo'>
              <div className='monitoreo-vanguardia'>
                <div class="texto-vanguardia">
                  <h2 >VANGUARDIA</h2>
                  <p>Utilizamos las últimas innovaciones en sistemas de seguridad para ofrecer vigilancia 
                    en tiempo real, detección de intrusiones, y alarmas inmediatas.
                  </p>
                </div>
              </div>
              <div className='monitoreo-personalización'>
                <div className='monitoreo-personalizacion>'>
                  <div className='texto-personalizacion'>
                    <h2 >PERSONALIZACION</h2>
                    <p>Cada hogar y negocio es único. Por eso, ofrecemos planes personalizados que se adaptan a tus necesidades específicas, 
                      asegurando la máxima eficacia de tu sistema de seguridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default OptionMonitoreo;
