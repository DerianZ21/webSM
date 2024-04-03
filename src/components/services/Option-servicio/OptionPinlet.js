import React from 'react';


function OptionPinlet (){

    return(
        <div>
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
    )
}

export default OptionPinlet;

