import React, { useState } from 'react';
import MenuServicio from './MenuServicio';
import "../../../styles/services/optionservicio.css"

function OptionsServiceo() {
  const [visibleOption, setVisibleOption] = useState(null);

  return (
    <div>
      <MenuServicio onOptionClick={setVisibleOption}/>
      <div className="options-servicio">
        <div className={visibleOption === 'monitoreo' ? 'option visible' : 'option'}>
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

        <div id='hogar' className={visibleOption === 'hogar' ? 'option visible' : 'option'}>
          <h1>SISTEMAS DE SEGURIDAD PARA EL HOGAR</h1>
          <p>Protege Tu Hogar y a Tus Seres Queridos con Sistemas de Seguridad Avanzados</p>
          <div className='lista-beneficios'>
            <div className='info-hogar'>
              <img></img>
              <p>Prevención</p>
            </div>
            <div className='info-hogar'>
              <img></img>
              <p>Integridad</p>
            </div>
            <div className='info-hogar'>
              <img></img>
              <p>Gestión</p>
            </div>
          </div>
        </div>

        <div id='oficina' className={visibleOption === 'oficina' ? 'option visible' : 'option'}>
          <h1>SISTEMAS DE SEGURIDAD PARA LA OFICINA</h1>
          <p>Protege Tu nogocio y a tu oficina o espacios comerciales</p>
          <div className='lista-beneficios'>
            <div className='info-oficina'>
              <img></img>
              <p>Adaptabilidad</p>
            </div>
            <div className='info-oficina'>
              <img></img>
              <p>Integridad</p>
            </div>
            <div className='info-oficina'>
              <img></img>
              <p>Escalabilidad</p>
            </div>
          </div>
        </div>
        
        <div  className={visibleOption === 'pinlet' ? 'option visible' : 'option'}>
          <div id='pinlet'>
            <div  className='texto-pinlet'>
              <a href='http://www.pinlet.net/' target='_blank' rel="noopener noreferrer">
                <img  id='titulo-pinlet' src='../images/iconos-png/pinlet-completo.png' alt='pinlet' ></img>
              </a>
              <p>
                Gestiones las visitas en tu redidencia
              </p>
              <div className='telefono'>
                <img className='marco-smartphone' src='../images/diseños/marco-smartphone.webp' alt='marco' ></img>
                <img className='pantalla' src='../images/diseños/pantalla-pinlet.webp' alt='pantalla'></img>
              </div>
            </div>
            <div>
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
              <div className='descarga-pinlet'>
                <a href='https://play.google.com/store/apps/details?id=com.pinletsa.pinlet&pli=1' rel="noopener noreferrer" target='_blank'>
                  <div className='contenedor-img-google'>
                    <img src='../images/diseños/google-play.png' alt='google play'></img>
                  </div>
                </a>
                <a href='https://apps.apple.com/us/app/pinlet/id1191946483' rel="noopener noreferrer" target='_blank'>
                  <div className='contenedor-img-apple'>
                    <img src='../images/diseños/apple.png' alt='apple'></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsServiceo;