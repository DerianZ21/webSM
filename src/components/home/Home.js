import React from 'react';
import Discription from './description/Description';
import Customers from './Customers';
import ProductsServices from './products-services/ProductsServices';


function Home() {

  
  return (
    <div className='main-home'>
      <Discription/>
      <ProductsServices/>
      <h1>EMPRESAS QUE CONFIAN EN NOSOTROS</h1>
      <Customers/>
    </div>
  );
}

export default Home;