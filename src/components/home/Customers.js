import React from 'react';
import Slider from 'react-slick';
import '../../styles/home/customers.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cocacola from '../../assets/images/logo/empresa/coca-cola.png';
import pepsi from '../../assets/images/logo/empresa/pepsi.webp';
import comandato from '../../assets/images/logo/empresa/comandato.png';
import deprati from '../../assets/images/logo/empresa/deprati.png';
import laGanga from '../../assets/images/logo/empresa/la-ganga.png';
import UEES from '../../assets/images/logo/empresa/UEES.jpg';
import ULVR from '../../assets/images/logo/empresa/ULVR.png';
import sweetAndCoffee from '../../assets/images/logo/empresa/sweet-and-coffee.webp';
import miComisariato from '../../assets/images/logo/empresa/mi-comisariato.png';
import bancoGuayaquil from '../../assets/images/logo/empresa/banco-guayaquil.webp';
import toyota from '../../assets/images/logo/empresa/toyota.png';
import APY from '../../assets/images/logo/empresa/APY.svg';
import expalsa from '../../assets/images/logo/empresa/expalsa.png';
import creditosEconomicos from '../../assets/images/logo/empresa/creditos-economicos.jpg';
import etinar from '../../assets/images/logo/empresa/etinar.webp';
import xima from '../../assets/images/logo/empresa/xima.jpg';
import iess from '../../assets/images/logo/empresa/iess.png';
import blueBay from '../../assets/images/logo/empresa/blue-bay.webp';
import malecon2000 from '../../assets/images/logo/empresa/malecon2000.webp';
import mallSol from '../../assets/images/logo/empresa/mall-sol.webp';
import solca from '../../assets/images/logo/empresa/solca.webp';
import torresCosta from '../../assets/images/logo/empresa/torres-costa.webp';

function Customers() {

  const logos = [
    { src: cocacola, alt: 'logo de coca-cola', link: 'https://www.coca-cola.com/ec/es' },
    { src: pepsi, alt: 'Logo de Pepsi', link: 'https://www.pepsi.es/' },
    { src: comandato, alt: 'Logo de Comandato', link: 'https://www.comandato.com/' },
    { src: deprati, alt: 'Logo de Deprati', link: 'https://www.comandato.com/'  },
    { src: laGanga, alt: 'Logo de La Ganga', link: 'https://www.comandato.com/'  },
    { src: UEES, alt: 'Logo de UEES', link: 'https://www.comandato.com/'  },
    { src: ULVR, alt: 'Logo de ULVR', link: 'https://www.comandato.com/'  },
    { src: sweetAndCoffee, alt: 'Logo de Sweet & Coffee', link: 'https://www.comandato.com/'  },
    { src: miComisariato, alt: 'Logo de Mi Comisariato', link: 'https://www.comandato.com/'  },
    { src: bancoGuayaquil, alt: 'Logo de Banco Guayaquil', link: 'https://www.comandato.com/'  },
    { src: toyota, alt: 'Logo de Toyota', link: 'https://www.comandato.com/'  },
    { src: APY, alt: 'Logo de APY', link: 'https://www.comandato.com/'  },
    { src: expalsa, alt: 'Logo de Expalsa', link: 'https://www.comandato.com/'  },
    { src: creditosEconomicos, alt: 'Logo de Créditos Económicos', link: 'https://www.comandato.com/'  },
    { src: etinar, alt: 'Logo de Etinar', link: 'https://www.comandato.com/'  },
    { src: xima, alt: 'Logo de Xima', link: 'https://www.comandato.com/'  },
    { src: iess, alt: 'Logo de IESS', link: 'https://www.comandato.com/'  },
    { src: blueBay, alt: 'Logo de IESS', link: 'https://www.comandato.com/'  },
    { src: malecon2000, alt: 'Logo de IESS', link: 'https://www.comandato.com/'  },
    { src: mallSol, alt: 'Logo de IESS', link: 'https://www.comandato.com/'  },
    { src: solca, alt: 'Logo de IESS', link: 'https://www.comandato.com/'  },
    { src: torresCosta, alt: 'Logo de IESS', link: 'https://www.comandato.com/'  },

  ];

  const logoChunks = [];
  for (let i = 0; i < logos.length; i += 10) {
    logoChunks.push(logos.slice(i, i + 10));
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
    pauseOnHover: false,
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
