import React from 'react';
import CarouselProductsServices from './CarouselProductsServices'
import Deslizador from './Deslizador';
import '../../../styles/home/products-services.css'

function ProductsServices() {
  return (
    <div className='main-products-services'>
      <Deslizador/>
      <CarouselProductsServices/>
    </div>
  );
}

export default ProductsServices;