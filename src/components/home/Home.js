import React from 'react';
import Discription from './Description';
import Customers from './Customers';
import ProductsServices from './ProductsServices';


function Home() {
  return (
    <div className='main-home'>
      <Discription/>
      <ProductsServices/>
      <Customers/>
    </div>
  );
}

export default Home;