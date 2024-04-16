import React, { useState, useEffect, useRef } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import incendios from '../../../assets/images/funciones/deteccion-incendios.png'

function Deslizador() {

  const listPS = [
    {
      id: "Sistema de alarma",
      descripcion: "SISTEMA DE ALARMAS",
      ruta: incendios,
    },

    {
      id: "Cerco electrico",
      descripcion: "CERCO ELÉCTRICO",
      ruta: incendios,
    },

    {
      id: "Control acceso",
      descripcion: "CONTROL DE ACCESO",
      ruta: incendios,
    },
    {
      id: "Control vehicular",
      descripcion: "SISTEMA DE CONTROL VEHICULAR",
      ruta: incendios,
    },
    {
      id: "Control de Incendios",
      descripcion: "DETECCIÓN Y EXTINCIÓN DE INCENDIOS",
      ruta: incendios,
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
    infinite: true,
    slidesToShow: 3,
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
        <div className='titulo-deslizador'>
          <h1>NUESTROS USOS</h1>
        </div>
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
              <img className="prueba" src={PSimg.ruta} ></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Deslizador;