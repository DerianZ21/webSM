import React from 'react';
import '../../styles/home/customers.css'

function Customers() {

  const logos = [
    { src: '/images/logos-empresas/coca-cola.png', alt: 'Logo 1', link: ''},
    { src: '/images/logos-empresas/pepsi.webp', alt: 'Logo 1' },
    { src: '/images/logos-empresas/comandato.png', alt: 'Logo 1' },
    { src: '/images/logos-empresas/deprati.png', alt: 'Logo 1' },
    { src: '/images/logos-empresas/la-ganga.png', alt: 'Logo 1' },
    { src: '/images/logos-empresas/UEES.jpg', alt: 'Logo 1' },
    { src: '/images/logos-empresas/ULVR.png', alt: 'Logo 1' },
    { src: '/images/logos-empresas/sweet-and-coffee.webp', alt: 'Logo 1' },
    { src: '/images/logos-empresas/mi-comisariato.png', alt: 'Logo 1' },
    { src: '/images/logos-empresas/banco-guayaquil.webp', alt: 'Logo 1' },
    { src: '/images/logos-empresas/toyota.png', alt: 'Logo 1' },
    { src: '/images/logos-empresas/APY.svg', alt: 'Logo 1' },
    { src: '/images/logos-empresas/expalsa.png', alt: 'Logo 1' },
    { src: '/images/logos-empresas/creditos-economicos.jpg', alt: 'Logo 1' },

  ]

  return (
    <div className='main-customers'>
      <div>
        <h1 > ALGUNOS DE NUESTROS CLIENTES
        </h1>
      </div>
      <div className='empresas'>
        {logos.map((logo, index) => (
          <div key={index} className="logo-empresa">
            <a href={logos.link}>
              <img src={logo.src} alt={logo.alt}/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;