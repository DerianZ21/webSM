import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Deslizador() {

    const listPS = [
        {
            id: "Sistema-cctv",
            descripcion: "SISTEMA CCTV",
        },

        {
            id: "Sistema-alarma",
            descripcion: "SISTEMA DE ALARMAS",
        },

        {
            id: "Cerco-electrico",
            descripcion: "CERCO ELÉCTRICO",
        },

        {
            id: "Bitacora-electronica",
            descripcion: "BITÁCORA ELECTRÓNICA",
        },

        {
            id: "Control-acceso",
            descripcion: "CONTROL DE ACCESO",
        },

        {
            id: "Codigo-qr",
            descripcion: "CÓDIGO QR",
        },

        {
            id: "Control-vehicular",
            descripcion: "SISTEMA DE CONTROL VEHICULAR",
        },
        {
            id: "Incendios",
            descripcion: "DETECCIÓN Y EXTINCIÓN DE INCENDIOS",
        },
        {
            id: "pPuerta-seguridad",
            descripcion: "PUERTAS DE SEGURIDAD",
        },
    ];


const settings = {
    dots: false, // Mostrar puntos de navegación
    infinite: false,
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    vertical: true, 
    verticalSwiping: true, 
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='main-deslizador'>
        <div className='titulo-deslizador'>
            <h1>NUESTROS USOS</h1>
        </div>
        <Slider {...settings}>
            {listPS.map((PS, index) => (
                <div className='itemPS'>
                    <h3>{PS.id}</h3>
                </div>
            ))}
        </Slider>
    </div>
);
}

export default Deslizador;