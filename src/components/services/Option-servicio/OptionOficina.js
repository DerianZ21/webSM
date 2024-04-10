import React from 'react';
import adaptabilidad from '../../../assets/images/icon/adaptabilidad.png'
import integridad from '../../../assets/images/icon/integridad-oficina.png'
import escalabilidad from '../../../assets/images/icon/escalabilidad.png'
import oficina from '../../../assets/images/nuestras/oficina.webp'


function OptionOficina() {

  return (
    <div id='oficina'>
      <div className='texto-oficina'>
        <h1>SISTEMAS DE SEGURIDAD PARA LA OFICINA</h1>
        <p>Protege Tu nogocio y a tu oficina o espacios comerciales</p>
      </div>
      <div className='contenido-oficina'>
        <div className='lista-beneficios'>
          <div className='info-oficina'>
            <img src={adaptabilidad} alt='adaptabilidad'></img>
            <div>
              <h3>ADAPTABILIDAD
              </h3>
              <p> Ajusta tus sistemas de seguridad a tus necesidades en tu entorno comercial.
              </p>
            </div>
          </div>
          <div className='info-oficina'>
            <img src={integridad} alt='integridad'></img>
            <div>
              <h3>INTEGRIDAD
              </h3>
              <p>Protección efectiva, confiable y consistente de tu equipo y propiedad.
              </p>
            </div>
          </div>
          <div className='info-oficina'>
            <img src={escalabilidad} alt='escalabilidad'></img>
            <div>
              <h3>ESCALABILIDAD
              </h3>
              <p>Integracion fácil, amplia tus sistemas en base a la expanción de tu negocio.
              </p>
            </div>
          </div>
        </div>
        <div className='contenedor-img-oficina'>
          <img src={oficina} alt='oficina'>
          </img>
        </div>
      </div>
    </div>
  )
}

export default OptionOficina;