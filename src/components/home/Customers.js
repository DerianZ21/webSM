import React from 'react';
import Slider from 'react-slick';
import '../../styles/home/customers.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cocacola from '../../assets/images/logo/empresa/coca-cola.png';

function Customers() {

  const logos = [
    { src: {cocacola}, alt: 'logo de coca-cola', link: 'https://www.coca-cola.com/ec/es' },
    { src: '../../assets/images/logo/empresa/pepsi.webp', alt: 'Logo 1', link: 'https://www.pepsi.es/' },
    { src: '../../assets/images/logo/empresa/comandato.png', alt: 'Logo 1', link: 'https://www.comandato.com/' },
    { src: '../../assets/images/logo/empresa/deprati.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/la-ganga.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/UEES.jpg', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/ULVR.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/sweet-and-coffee.webp', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/mi-comisariato.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/banco-guayaquil.webp', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/toyota.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/APY.svg', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/expalsa.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/creditos-economicos.jpg', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/etinar.webp', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/xima.jpg', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '../../assets/images/logo/empresa/iess.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },

  ]

  const logoChunks = [];
  for (let i = 0; i < logos.length; i += 14) {
    logoChunks.push(logos.slice(i, i + 14));
  }


  const settings = {
    dots: false,
    arrows: false,
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
      {logoChunks.map((chunk, index) => (
        <div key={index} className='main-customers'>
          <div className='empresas'>
            {chunk.map((logo, logoIndex) => (
              <div key={logoIndex} className="logo-empresa">
                <a href={logo.link || '#'} target="_blank" rel="noopener noreferrer">
                  <img src={logo.src} alt={logo.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Customers;
