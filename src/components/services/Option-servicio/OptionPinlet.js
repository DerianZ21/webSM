import React from 'react';
import tituloPinlet from '../../../assets/images/logo/pinlet-texto.svg'
import marco from '../../../assets/images/diseno/marco-smartphone.webp'
import pantalla from '../../../assets/images/diseno/pantalla-pinlet.webp'
import megafono from '../../../assets/images/icon/megafono.png'
import QR from '../../../assets/images/icon/QR.png'
import seguridad from '../../../assets/images/icon/seguridad.png'
import global from '../../../assets/images/icon/global.png'
import lista from '../../../assets/images/icon/lista.png'
import caja from '../../../assets/images/icon/caja.png'
import usuarios from '../../../assets/images/icon/usuarios.png'
import google from '../../../assets/images/icon/google-play.png'
import apple from '../../../assets/images/icon/apple.png'



function OptionPinlet (){

    return(
        <div>
            <div id='pinlet'>
            <div  className='texto-pinlet'>
              <a href='http://www.pinlet.net/' target='_blank' rel="noopener noreferrer">
                <img  id='titulo-pinlet' src={tituloPinlet} alt='pinlet' ></img>
              </a>
              <p>
                Gestiones las visitas en tu redidencia
              </p>
              <div className='telefono'>
                <img className='marco-smartphone' src={marco} alt='marco' ></img>
                <img className='pantalla' src={pantalla} alt='pantalla'></img>
              </div>
            </div>
            <div>
              <div id='info-pinlet'>
                <div>
                  <div className='contenedor-img-pinlet'>
                    <img src={megafono} alt='megafono'></img>
                  </div>
                  <p>Anuncio y autorización de ingreso</p>
                </div>
                <div>
                  <div className='contenedor-img-pinlet'>
                    <img src={QR} alt='QR'></img>
                  </div>
                  <p>Comparte códigos de ingreso</p>
                </div>
                <div>
                  <div className='contenedor-img-pinlet'>
                    <img src={seguridad} alt='seguridad'></img>
                  </div>
                  <p>Seguridad en laa funciones</p>
                </div>
                <div>
                  <div className='contenedor-img-pinlet'>
                    <img src={global} alt='global'></img>
                  </div>
                  <p>Gestiona tus visitantes desde donde estes</p>
                </div>
                <div>
                  <div className='contenedor-img-pinlet'>
                    <img src={lista} alt='lista'></img>
                  </div>
                  <p>Listado de visitas en tiempo real</p>
                </div>
                <div>
                  <div className='contenedor-img-pinlet'>
                    <img src={caja} alt='caja'></img>
                  </div>
                  <p>Registro historico de información</p>
                </div>
                <div>
                  <div className='contenedor-img-pinlet'>
                    <img src={usuarios} alt='usuarios'></img>
                  </div>
                  <p>Facil administración de usuarios</p>
                </div>
              </div>
              <div className='descarga-pinlet'>
                <a href='https://play.google.com/store/apps/details?id=com.pinletsa.pinlet&pli=1' rel="noopener noreferrer" target='_blank'>
                  <div className='contenedor-img-google'>
                    <img src={google} alt='google play'></img>
                  </div>
                </a>
                <a href='https://apps.apple.com/us/app/pinlet/id1191946483' rel="noopener noreferrer" target='_blank'>
                  <div className='contenedor-img-apple'>
                    <img src={apple} alt='apple'></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default OptionPinlet;

