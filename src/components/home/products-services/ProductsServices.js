import React from 'react';
import Deslizador from './Deslizador';
import BannerPS from './BannerPS';
import '../../../styles/home/products-services.css'

function ProductsServices() {
  return (
    <div className='main-products-services'>
      <Deslizador/>
      <BannerPS/>
      <h1>DISPOSITIVOS</h1>
    </div>
  );
}

export default ProductsServices;