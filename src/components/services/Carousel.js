import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/services/carousel.css';
import monitoreo from '../../assets/images/funciones/central-monitoreo2.webp';
import recomendaciones from '../../assets/images/nuestras/recomendaciones-de-seguridad.webp';
import beneficios from '../../assets/images/nuestras/beneficios.webp';
import costos from '../../assets/images/nuestras/costos-servicio1.webp';
import pinlet from '../../assets/images/nuestras/pinlet.webp';

function Carousel() {
  const sliderMain = useRef(null);
  const sliderNav = useRef(null);

  const settingsMain = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    fade: true,
    asNavFor: sliderNav.current // Referencia al otro slider
  };

  const settingsNav = {
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    pauseOnHover: false,
    focusOnSelect: true,
    asNavFor: sliderMain.current // Referencia al otro slider
  };

  return (
    <div>
      <Slider ref={sliderMain} {...settingsMain}>
        <div className='content-carousel'>
          <img className='img-carousel' src={monitoreo} alt="central de monitoreo" />
        </div>
        <div className='content-carousel'>
          <img className='img-carousel' src={recomendaciones} alt="recomendaciones" />
        </div>
        <div className='content-carousel'>
          <img className='img-carousel' src={beneficios} alt="beneficios" />
        </div>
        <div className='content-carousel'>
          <img className='img-carousel' src={costos} alt="costos" />
        </div>
        <div className='content-carousel'>
          <img className='img-carousel' src={pinlet} alt="pinlet" />
        </div>
      </Slider>
      <Slider ref={sliderNav} {...settingsNav}>
        <div className='content-carousel-nav'>
          <img className='img-carousel-nav' src={monitoreo} alt="central de monitoreo" />
        </div>
        <div className='content-carousel-nav'>
          <img className='img-carousel-nav' src={recomendaciones} alt="recomendaciones" />
        </div>
        <div className='content-carousel-nav'>
          <img className='img-carousel-nav' src={beneficios} alt="beneficios" />
        </div>
        <div className='content-carousel-nav'>
          <img className='img-carousel-nav' src={costos} alt="costos" />
        </div>
        <div className='content-carousel-nav'>
          <img className='img-carousel-nav' src={pinlet} alt="pinlet" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;