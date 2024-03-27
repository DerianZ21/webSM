import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/services/carousel.css'

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
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
          <img className='img-carousel' src="../images/imagesServicios/central-monitoreo.webp" alt="central de monitoreo" />
        </div>
        <div className='content-carousel'> 
          <img className='img-carousel' src="../images/imagesServicios/recomendaciones.webp" alt="recomendaciones" />
        </div>
        <div className='content-carousel'>
          <img  className='img-carousel' src="../images/imagesServicios/beneficios.webp" alt="beneficios" />
        </div>
        <div className='content-carousel'>
          <img className='img-carousel' src="../images/imagesServicios/costos.webp" alt="costos" />
        </div>
        <div className='content-carousel'>
          <img className='img-carousel' src="../images/imagesServicios/pinlet.webp" alt="pinlet" />
        </div>
      </Slider>
    );
  };
  
  export default Carousel;