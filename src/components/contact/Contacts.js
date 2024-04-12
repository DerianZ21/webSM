import React from 'react';
import Map from './Map'
import FormEmail from './FormEmail'
import Cards from './Cards'
import '../../styles/contact/contact.css'

function Contacts() {



  return (
    <div className='main-contact'>
      <h1>CONTACTANOS</h1>
      <div className='top-contact'>
        <Cards />
        <Map />
      </div>
      <FormEmail />
    </div>
  );
}

export default Contacts;