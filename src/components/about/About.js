import React from 'react';
import '../../styles/about.css'

function About() {
  return (
    <div className='main-about'>
      <div className='presentation'>
        <div className='img-about'>
          <img alt='imagen sobre nosotros'>
          </img>
        </div>
        <div className='presentation-text'>
          <p>Manrique Seguridad, nació hace más de 25 años, es liderada por Xavier Manrique.
            Durante estos años, Manrique Seguridad se ha categorizado en el mercado Ecuatoriano
            como una de las mejores empresa de seguridad.</p>

          <p>Nuestros centros de vigilancia son operados por una tecnología de última generación
            respaldados por equipos de gran alcance y con enlaces de comunicación seguros.</p>

          <p>Manrique Seguridad tiene la capacidad de brindar protección en condiciones adversas.
            Le garantizamos que usted recibirá un servicio continuo y confiable.</p>
        </div>
      </div>
      <div className='mapa-estrategico'>
        <div className='mision'>
          <h1>Misión</h1>
          <div>
            <p></p>
          </div>

        </div>
        <div className='vision'>
          <h1>Visión</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;