import React, { useState, useEffect, useRef } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import incendios from '../../../assets/images/funciones/deteccion-incendios.png'
import alarma from '../../../assets/images/funciones/sistema-alarma.png'
import cerco from '../../../assets/images/funciones/cerco-electrico.png'
import acceso from '../../../assets/images/funciones/control-acceso.png'
import vehicular from '../../../assets/images/funciones/control-vehicular2.webp'
import iconAlarma from '../../../assets/images/icon/alarma.png'
import iconVehicular from '../../../assets/images/icon/vehiculo.png'
import iconAcceso from '../../../assets/images/icon/acceso.png'
import iconIncendios from '../../../assets/images/icon/fuego.png'
import iconCerco from '../../../assets/images/icon/cerco.png'

function Deslizador() {

  const listPS = [
    {
      id: "Sistema de alarma",
      descripcion: "sistemas de alarmas",
      ruta: alarma,
      icon: iconAlarma,
    },

    {
      id: "Cerco electrico",
      descripcion: "cerco electrificado",
      ruta: cerco,
      icon: iconCerco,
    },

    {
      id: "Control acceso",
      descripcion: "control de acceso",
      ruta: acceso,
      icon: iconAcceso,
    },
    {
      id: "Control vehicular",
      descripcion: "sistemas de control vehicular",
      ruta: vehicular,
      icon: iconVehicular,
    },
    {
      id: "Control de Incendios",
      descripcion: "sistemas de detección de incendios",
      ruta: incendios,
      icon: iconIncendios,
    }
  ];

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);


  const settingsCarousel = {
    dots: false,
    centerPadding: "75px",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };


  const settingsImg = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className='main-deslizador'>
      <div className='deslizador-carousel'>
        <Slider className='sliderDeslizador' {...settingsCarousel} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
          {listPS.map((PS, index) => (
            <div className='itemPS'>
              <h3>{PS.id}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <div className='deslizador-img'>
        <Slider className='sliderImg' {...settingsImg} asNavFor={nav1} ref={slider => (sliderRef2 = slider)}>
          {listPS.map((PSimg, index) => (
            <div className='contenedor-img-deslizador'>
              <img className="prueba" src={PSimg.ruta} alt={PSimg.descripcion} ></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Deslizador;