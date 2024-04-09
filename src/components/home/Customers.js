import React from 'react';
import Slider from 'react-slick';
import '../../styles/home/customers.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Customers() {

  const logos = [
    { src: '/images/logos-empresas/coca-cola.png', alt: 'Logo 1', link: 'https://www.coca-cola.com/ec/es' },
    { src: '/images/logos-empresas/pepsi.webp', alt: 'Logo 1', link: 'https://www.pepsi.es/' },
    { src: '/images/logos-empresas/comandato.png', alt: 'Logo 1', link: 'https://www.comandato.com/' },
    { src: '/images/logos-empresas/deprati.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/la-ganga.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/UEES.jpg', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/ULVR.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/sweet-and-coffee.webp', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/mi-comisariato.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/banco-guayaquil.webp', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/toyota.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/APY.svg', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/expalsa.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/creditos-economicos.jpg', alt: 'Logo 1', link: 'https://www.comandato.com/'  },

    { src: '/images/logos-empresas/etinar.webp', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/xima.jpg', alt: 'Logo 1', link: 'https://www.comandato.com/'  },
    { src: '/images/logos-empresas/iess.png', alt: 'Logo 1', link: 'https://www.comandato.com/'  },

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
