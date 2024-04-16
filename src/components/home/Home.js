import React from 'react';
import Discription from './description/Description';
import Customers from './Customers';
import About from './About';
import Extra from './Extra';
import Tecnologias from './Tecnologias';
import ProductsServices from './products-services/ProductsServices';


function Home() {

  
  return (
    <div className='main-home'>
      <Discription/>
      <Extra/>
      <ProductsServices/>
      <Tecnologias/>
      <About/>
      <Customers/>
    </div>
  );
}

export default Home;