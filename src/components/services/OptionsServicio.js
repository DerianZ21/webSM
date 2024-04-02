import React, { useState } from 'react';
import MenuServicio from './MenuServicio';
import "../../styles/services/optionservicio.css"

function OptionsServiceo() {
  const [visibleOption, setVisibleOption] = useState(null);

  return (
    <div>
      <MenuServicio onOptionClick={setVisibleOption}/>
      <div className="options-servicio">
        <div className={visibleOption === 'monitoreo' ? 'option visible' : 'option'}>
          <h1>CENTRAL DE MONITOREO</h1>
          <div id='info-monitoreo'>
            <div>
              <div className='contenedor-img-monitoreo'>
                <img src='../images/iconos-png/24-7.png' alt='47/7'></img>
              </div>
              <p>Opera 24 horas al dia, los 365 dias al año</p>
            </div>
            <div>
              <div className='contenedor-img-monitoreo'>
                <img src='../images/iconos-png/camara.png' alt='camara'></img>
              </div>
              <p>implementación de equipos tecnologicos</p>
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
        </div>

        <div className={visibleOption === 'hogar' ? 'option visible' : 'option'}>
        <h1>CENTRAL DE MONITOREO</h1>
          <div id='info-monitoreo'>
            <div>
              <div className='contenedor-img'>
                <img src='../images/iconos/24-7.png'></img>
              </div>
              <p>Opera 24 horas al dia, los 365 dias al año</p>
            </div>
            <div>
              <div className='contenedor-img'>
                <img src='../images/iconos/camara.png'></img>
              </div>
              <p>implementación de equipos tecnologicos</p>
            </div>
            <div>
              <div className='contenedor-img'>
                <img src='../images/iconos/central.png'></img>
              </div>
              <p>Centralista durante el dia y noche</p>
            </div>
            <div>
              <div className='contenedor-img'>
                <img src='../images/iconos/comunicacion.png'></img>
              </div>
              <p>Comunicación directa con todo el personal de seguridad</p>
            </div>
          </div>
        </div>

        <div className={visibleOption === 'oficina' ? 'option visible' : 'option'}>
        <h1>CENTRAL DE MONITOREO</h1>
          <div id='info-monitoreo'>
            <div>
              <div className='contenedor-img'>
                <img src='../images/iconos/24-7.png'></img>
              </div>
              <p>Opera 24 horas al dia, los 365 dias al año</p>
            </div>
            <div>
              <div className='contenedor-img'>
                <img src='../images/iconos/camara.png'></img>
              </div>
              <p>implementación de equipos tecnologicos</p>
            </div>
            <div>
              <div className='contenedor-img'>
                <img src='../images/iconos/central.png'></img>
              </div>
              <p>Centralista durante el dia y noche</p>
            </div>
            <div>
              <div className='contenedor-img'>
                <img src='../images/iconos/comunicacion.png'></img>
              </div>
              <p>Comunicación directa con todo el personal de seguridad</p>
            </div>
          </div>
        </div>
        
        <div  className={visibleOption === 'pinlet' ? 'option visible' : 'option'}>
          <div id='pinlet'>
            <div className='texto-pinlet'>
              <img id='titulo-pinlet' src='../images/imagenesNuestras/textoLogoPinlet.png' alt='pinlet'></img>
              <p>
                Gestiones las visitas en tu redidencia
              </p>
              <div className='telefono'>
                <img className='marco-smartphone' src='../images/diseños/marco-smartphone.webp' alt='marco'></img>
                <img className='pantalla' src='../images/diseños/pantalla-pinlet.webp' alt='pantalla'></img>
              </div>
            </div>
            
            <div id='info-pinlet'>
              <div>
                <div className='contenedor-img-pinlet'>
                  <img src='../images/iconos-png/megafono.png' alt='megafono'></img>
                </div>
                <p>Anuncio y autorización de ingreso</p>
              </div>
              <div>
                <div className='contenedor-img-pinlet'>
                  <img src='../images/iconos-png/QR.png' alt='QR'></img>
                </div>
                <p>Comparte códigos de ingreso</p>
              </div>
              <div>
                <div className='contenedor-img-pinlet'>
                  <img src='../images/iconos-png/seguridad.png' alt='seguridad'></img>
                </div>
                <p>Seguridad en laa funciones</p>
              </div>
              <div>
                <div className='contenedor-img-pinlet'>
                  <img src='../images/iconos-png/global.png' alt='global'></img>
                </div>
                <p>Gestiona tus visitantes desde donde estes</p>
              </div>
              <div>
                <div className='contenedor-img-pinlet'>
                  <img src='../images/iconos-png/lista.png' alt='lista'></img>
                </div>
                <p>Listado de visitas en tiempo real</p>
              </div>
              <div>
                <div className='contenedor-img-pinlet'>
                  <img src='../images/iconos-png/caja.png' alt='caja'></img>
                </div>
                <p>Registro historico de información</p>
              </div>
              <div>
                <div className='contenedor-img-pinlet'>
                  <img src='../images/iconos-png/usuarios.png' alt='usuarios'></img>
                </div>
                <p>Facil administración de usuarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsServiceo;