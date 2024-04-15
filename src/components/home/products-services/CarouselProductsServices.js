import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CCTV from '../../../assets/images/nuestras/sistemas-cctv.webp'
import alarma from '../../../assets/images/nuestras/sistemas-alarmas.webp'
import cerco from '../../../assets/images/nuestras/cerco-electrico.webp'
import bitacora from '../../../assets/images/nuestras/bitacora-electronica.webp'
import acceso from '../../../assets/images/nuestras/control-acceso.webp'
import codigoQR from '../../../assets/images/nuestras/codigo-qr.webp'
import vehicular from '../../../assets/images/nuestras/control-vehicular.webp'
import incendios from '../../../assets/images/nuestras/sistemas-incendios.webp'
import puertas from '../../../assets/images/nuestras/puertas-seguridad.webp'

function CarouselProductsServices() {
    

    const infoPS = [
        {
            id: "sistema-cctv",
            url: CCTV,
            descripcion: "SISTEMA CCTV",
        },

        {
            id: "sistema-alarma",
            url: alarma,
            descripcion: "SISTEMA DE ALARMAS",
        },

        {
            id: "cerco-electrico",
            url: cerco,
            descripcion: "CERCO ELÉCTRICO",
        },

        {
            id: "bitacora-electronica",
            url: bitacora,
            descripcion: "BITÁCORA ELECTRÓNICA",
        },

        {
            id: "control-acceso",
            url: acceso,
            descripcion: "CONTROL DE ACCESO",
        },

        {
            id: "codigo-qr",
            url: codigoQR,
            descripcion: "CÓDIGO QR",
        },

        {
            id: "control-vehicular",
            url: vehicular,
            descripcion: "SISTEMA DE CONTROL VEHICULAR",
        },
        {
            id: "incendios",
            url: incendios,
            descripcion: "DETECCIÓN Y EXTINCIÓN DE INCENDIOS",
        },
        {
            id: "puerta-seguridad",
            url: puertas,
            descripcion: "PUERTAS DE SEGURIDAD",
        },
    ]


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const chunkSP = [];
    for (let i = 0; i < infoPS.length; i += 3) {
        chunkSP.push(infoPS.slice(i, i + 3));
    }
    return (
        <div className='main-carousel-PS'>
            <Slider {...settings}>
                {chunkSP.map((chunk, index) => (
                    <div key={index} className='Carousel-products-services'>
                        <div className='SP'>
                            {chunk.map((SP, SPIndex) => (
                                <div key={SPIndex} className="SP-contenedor">
                                    <a href={SP.link || '#'} target="_blank" rel="noopener noreferrer">
                                        <img src={SP.url} alt={SP.alt} />
                                        <p>{SP.descripcion}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CarouselProductsServices;