import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                <img className='img-carousel-description' src="../images/imagenesNuestras/sistemasQR.jpg" alt="sistemas con tecnologia QR" ></img>
                <img className='img-carousel-description' src="../images/imagenesNuestras/sistemaFACIAL.jpg" alt="sistemas de reconocimeintofacial" ></img>
                <img className='img-carousel-description' src="../images/imagenesNuestras/gestionAPP.jpg" alt="Gestion por aplicacion movil"></img>
        </Slider>
    )
}


export default CarouselDescription;