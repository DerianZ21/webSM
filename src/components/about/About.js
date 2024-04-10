import React from 'react';
import '../../styles/about.css'
import familiaEmpresarial from '../../assets/images/nuestras/familia-empresarial.webp';

function About() {
  return (
    <div className='main-about'>
      <div className='presentation'>
        <div className='img-about'>
          <img src={familiaEmpresarial} alt='imagen sobre nosotros'>
          </img>
        </div>
        <div className='presentation-text'>
          <h1>¿Quienes somos?</h1>
          <p>
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
            <p>En EcoTech Innovations, nos dedicamos apasionadamente a 
              diseñar, desarrollar y comercializar soluciones tecnológicas sustentables que no solo atiendan las necesidades actuales de nuestros usuarios, 
              sino que también promuevan un futuro más verde y sostenible. </p>
          </div>

        </div>
        <div className='vision'>
          <h1>Visión</h1>
          <div>
            <p>Aspiramos a convertirnos en sinónimo de sostenibilidad y innovación a nivel mundial. 
              Imaginamos un futuro en el que nuestras soluciones tecnológicas sean una 
              fuerza clave en la reducción de la huella ecológica global</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;