import React from 'react';
import Discription from './description/Description';
import Customers from './Customers';
import About from './About';
import Extra from './Extra';
import ProductsServices from './products-services/ProductsServices';


function Home() {

  
  return (
    <div className='main-home'>
      <Discription/>
      <About/>
      <Extra/>
      <ProductsServices/>
      <Customers/>
    </div>
  );
}

export default Home;