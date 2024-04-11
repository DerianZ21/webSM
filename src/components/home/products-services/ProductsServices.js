import React from 'react';
import { Link } from 'react-router-dom';
import CarouselProductsServices from './CarouselProductsServices'
import '../../../styles/home/products-services.css'

function ProductsServices() {
  return (
    <div className='main-products-services'>
      <div className='resumen-producto-servicio'>
        <div className='producto-servicio-izquierda'>
          <ul>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='texto-producto-servicio'>SISTEMA CCTV</p>
                <p className='numero-producto-servicio'>01</p>
              </Link>
            </li>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='texto-producto-servicio'>MONITOREO CCTV</p>
                <p className='numero-producto-servicio'>02</p>
              </Link>
            </li>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='texto-producto-servicio'>SISTEMA DE ALARMAS</p>
                <p className='numero-producto-servicio'>03</p>
              </Link>
            </li>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='texto-producto-servicio'>MONITOREO DE ALARMAS</p>
                <p className='numero-producto-servicio'>04</p>
              </Link>
            </li>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='texto-producto-servicio'>CERCO ELÉCTICO</p>
                <p className='numero-producto-servicio'>05</p>
              </Link>
            </li>
          </ul>
        </div>
        <hr className='hr-izquierda'></hr>
        <div className='titulo-producto-servicio'>
          <Link to="/services">
            <h1>PRODUCTOS Y SERVICIOS</h1>
          </Link>
        </div>
        <hr className='hr-derecha'></hr>
        <div className='producto-servicio-derecha'>
          <ul>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='numero-producto-servicio'>06</p>
                <p className='texto-producto-servicio'>BITÁCORA ELECTRÓNICA</p>
              </Link>
            </li>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='numero-producto-servicio'>07</p>
                <p className='texto-producto-servicio'>CONTROL DE ACCESO</p>
              </Link>
            </li>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='numero-producto-servicio'>08</p>
                <p className='texto-producto-servicio'>CÓDIGO QR</p>
              </Link>
            </li>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='numero-producto-servicio'>09</p>
                <p className='texto-producto-servicio'>SISTEMA DE CONTROL VEHICULAR</p>
              </Link>
            </li>
            <li>
              <Link to="/services#sistema-cctv">
                <p className='numero-producto-servicio'>10</p>
                <p className='texto-producto-servicio'>SISTEMA DE DETECCIÓN Y EXTINCIÓN DE INCENDIOS</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CarouselProductsServices/>
    </div>
  );
}

export default ProductsServices;