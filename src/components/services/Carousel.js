import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/services/carousel.css'
import monitoreo from '../../assets/images/funciones/central-monitoreo2.webp'
import recomendaciones from '../../assets/images/nuestras/recomendaciones-de-seguridad.webp'
import beneficios from '../../assets/images/nuestras/beneficios.webp'
import costos from '../../assets/images/nuestras/costos-servicio1.webp'
import pinlet from '../../assets/images/nuestras/pinlet.webp'


const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
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
      <Slider {...settings}>
        <div className='content-carousel'>
          <img className='img-carousel' src={monitoreo} alt="central de monitoreo" />
        </div>
        <div className='content-carousel'> 
          <img className='img-carousel' src={recomendaciones} alt="recomendaciones" />
        </div>
        <div className='content-carousel'>
          <img  className='img-carousel' src={beneficios} alt="beneficios" />
        </div>
        <div className='content-carousel'>
          <img className='img-carousel' src={costos} alt="costos" />
        </div>
        <div className='content-carousel'>
          <img className='img-carousel' src={pinlet} alt="pinlet" />
        </div>
      </Slider>
    );
  };
  
  export default Carousel;