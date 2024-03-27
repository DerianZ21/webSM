import React from 'react';
import '../styles/about.css'

function About() {
  return (
    <div className='main-about'>
      <div className='presentation'>
        <h1>¿QUIENES SOMOS?</h1>
        <img className='img-nosotros' src='../../images/imagenesNuestras/somos.webp' alt='Nosotros'></img>
        <p>Manrique Seguridad, nació hace más de 25 años, es liderada por Xavier Manrique.
          Durante estos años, Manrique Seguridad se ha categorizado en el mercado Ecuatoriano 
          como una de las mejores empresa de seguridad.</p>

        <p>Nuestros centros de vigilancia son operados por una tecnología de última generación
          respaldados por equipos de gran alcance y con enlaces de comunicación seguros.</p>

        <p>Manrique Seguridad tiene la capacidad de brindar protección en condiciones adversas.
          Le garantizamos que usted recibirá un servicio continuo y confiable.</p>
      </div>
      <div className='content-about'>
        <img className='img-nosotros' src='../../images/imagenesNuestras/somos.webp' alt='Nosotros'></img>
        <img className='img-nosotros' src='../../images/imagenesNuestras/somos.webp' alt='Nosotros'></img>
      </div>
    </div>
  );
}

export default About;