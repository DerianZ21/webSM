import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/services/deslizador.css'
import incendios from '../../assets/images/funciones/deteccion-incendios.webp'
import alarma from '../../assets/images/funciones/sistema-alarma.webp'
import cerco from '../../assets/images/funciones/cerco-electrico.webp'
import acceso from '../../assets/images/funciones/control-acceso.webp'
import vehicular from '../../assets/images/funciones/control-vehicular.webp'

function Deslizador() {

  const listPS = [
    {
      id: "Sistema de alarma",
      descripcion: "sistemas de alarmas",
      ruta: alarma
    },

    {
      id: "Cerco electrico",
      descripcion: "cerco electrificado",
      ruta: cerco,
    },

    {
      id: "Control acceso",
      descripcion: "control de acceso",
      ruta: acceso,
    },
    {
      id: "Control vehicular",
      descripcion: "sistemas de control vehicular",
      ruta: vehicular,
    },
    {
      id: "Control de Incendios",
      descripcion: "sistemas de detección de incendios",
      ruta: incendios,
    }
  ];


  const settingsCarousel = {
    dots: false,
    arrows:true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='main-deslizador'>
        <Slider className='sliderDeslizador' {...settingsCarousel} >
          {listPS.map((PS, index) => (
            <div>
              <img src={PS.ruta}></img>
            </div>
          ))}
        </Slider>
    </div>
  );
}

export default Deslizador;