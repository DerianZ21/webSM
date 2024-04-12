import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sistemaQR from '../../../assets/images/nuestras/sistemasQR.webp';
import sistemaRF from '../../../assets/images/nuestras/sistemaFACIAL.webp';
import gestionAPP from '../../../assets/images/nuestras/gestionAPP.webp';

function CarouselDescription() {

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
                    slidesToShow: 2,
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
        <Slider {...settings}>
                <img className='img-carousel-description' src={sistemaQR} alt="sistemas con tecnologia QR" loading="lazy"></img>
                <img className='img-carousel-description' src={sistemaRF} alt="sistemas de reconocimeintofacial" loading="lazy" ></img>
                <img className='img-carousel-description' src={gestionAPP} alt="Gestion por aplicacion movil" loading="lazy"></img>
        </Slider>
    )
}


export default CarouselDescription;