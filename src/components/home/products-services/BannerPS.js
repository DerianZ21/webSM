import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import alarma from '../../../assets/images/diseno/sistema-alarmas.webp'
import cerco from '../../../assets/images/diseno/cerco-electrico.webp'
import acceso from '../../../assets/images/diseno/control-acceso.webp'
import vehicular from '../../../assets/images/diseno/control-vehicular.webp'
import incendios from '../../../assets/images/diseno/deteccion-incendios.webp'


function BannerPS() {

    const listPS = [
        {
            id: "Sistema de alarma",
            descripcion: "sistemas de alarmas",
            informacion: "Siempre alerta a cualquier circunstancia",
            ruta: alarma,
        },

        {
            id: "Cerco electrico",
            descripcion: "cerco electrificado",
            informacion: "Manten seguro tu los limites de tu espacio",
            ruta: cerco,
        },

        {
            id: "Control acceso",
            descripcion: "control de acceso",
            informacion: "ten control sobre las personas sobre el acceso de las personas que desees",
            ruta: acceso,
        },
        {
            id: "Control vehicular",
            descripcion: "sistemas de control vehicular",
            informacion: "personaliza la entrada de vehiculos",
            ruta: vehicular,
        },
        {
            id: "Detección de Incendios",
            descripcion: "sistemas de detección de incendios",
            informacion: "Prvee cualquier altercado en base al fuego",
            ruta: incendios,
        }
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade:true,
        pauseOnHover: false,
        autoplaySpeed: 2800,
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


    return (
        <div className="main-bannerPS">
            <Slider {...settings}>
                {listPS.map((PSimg, index) => (
                    <div className="seccion-bannerPS">
                        <div className="contenedor-img-bannerPS">
                            <img src={PSimg.ruta} alt={PSimg.descripcion} ></img>
                        </div>
                        <div className="contenedor-text-bannerPS">
                            <h1>{PSimg.id}</h1>
                            <p>{PSimg.informacion}</p>
                        </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    )


}

export default BannerPS;