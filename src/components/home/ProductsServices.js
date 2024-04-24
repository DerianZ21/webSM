import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/home/products-services.css' 
import CCTV from '../../assets/images/nuestras/sistemas-cctv.webp'
import alarma from '../../assets/images/nuestras/sistemas-alarmas.webp'
import cerco from '../../assets/images/nuestras/cerco-electrico.webp'
import bitacora from '../../assets/images/nuestras/bitacora-electronica.webp'
import acceso from '../../assets/images/nuestras/control-acceso.webp'
import codigoQR from '../../assets/images/nuestras/codigo-qr.webp'
import vehicular from '../../assets/images/nuestras/control-vehicular.webp'
import incendios from '../../assets/images/nuestras/sistemas-incendios.webp'
import puertas from '../../assets/images/nuestras/puertas-seguridad.webp'

function ProductsServices() {

  const groupSP = [
    {
      id: "sistema-cctv",
      url: CCTV,
      descripcion: "SISTEMA CCTV",
      info: <p>Con nuestro servicio de Sistema CCTV (Circuito cerrado de televisión),
        tendrás la tranquilidad de poder visualizar en tiempo real lo que sucede en tu
        propiedad desde cualquier lugar del mundo.</p>
    },

    {
      id: "sistema-alarma",
      url: alarma,
      descripcion: "SISTEMA DE ALARMAS",
      info: <p>Nuestro sistema de alarma es tu mejor aliado en seguridad pasiva.
        Te alerta rápidamente ante cualquier evento no deseado,
        actuando como una eficaz herramienta disuasoria contra posibles problemas.</p>
    },

    {
      id: "cerco-electrico",
      url: cerco,
      descripcion: "CERCO ELÉCTRICO",
      info: <p>Nuestro cerco eléctrico es la solución ideal.
        Diseñado para operar las 24 horas del día, los 365 días del año,
        garantiza la seguridad constante de tu hogar o negocio. </p>
    },

    {
      id: "bitacora-electronica",
      url: bitacora,
      descripcion: "BITÁCORA ELECTRÓNICA",
      info: <p>Registro de informacion de manera digital, accesible las 24 horas del dia y
        con todo el software controlado por administración.</p>
    },

    {
      id: "control-acceso",
      url: acceso,
      descripcion: "CONTROL DE ACCESO",
      info: <p>Capacidad de permitir o restringir la entrada mediante una
        variedad de métodos de identificación, como tarjetas, llaveros, contraseñas,
        huellas dactilares o reconocimiento facial biométrico</p>
    },

    {
      id: "codigo-qr",
      url: codigoQR,
      descripcion: "CÓDIGO QR",
      info: <p>Utiliza códigos QR para controlar el acceso a edificios, oficinas,
        eventos y demas areas que deseas restringir, estos pueden ser implementados en
        dispositivos especailes, tarjetas o de manera digital en dispositivos moviles.</p>
    },

    {
      id: "control-vehicular",
      url: vehicular,
      descripcion: "SISTEMA DE CONTROL VEHICULAR",
      info: <p>¿Desea gestionar de manera eficiente y segura el acceso de vehículos en su
        espacio público o privado, como un estacionamiento?
        Nuestro sistema automatizado de control de acceso es la solución ideal.</p>
    },
    {
      id: "incendios",
      url: incendios,
      descripcion: "DETECCIÓN Y EXTINCIÓN DE INCENDIOS",
      info: <p>Con tecnología avanzada, detectamos cualquier señal de fuego en sus primeras etapas,
        permitiendo una respuesta rápida y precisa. Además,
        nuestras soluciones de extinción están diseñadas para controlar y
        extinguir el fuego de manera eficiente.</p>
    },
    {
      id: "puerta-seguridad",
      url: puertas,
      descripcion: "PUERTAS DE SEGURIDAD",
      info: <p>Diseñadas con los más altos estándares de calidad y resistencia, ofrecen una barrera
        robusta contra intrusos y cualquier amenaza externa.</p>
    },
  ]

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
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
    <div className=''>
      <Slider {...settings}>
      
              {groupSP.map((SP, index) => (
                <div key={index} className="contenedor-sp">
                  <img src={SP.url}></img>
                  <hr></hr>
                  <h1>{SP.descripcion}</h1>
                </div>
              ))}
      </Slider>
    </div>
  );
}

export default ProductsServices;