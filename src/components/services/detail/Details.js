import React from 'react';
import Section from './Section';
import '../../../styles/services/details.css'

function Details() {

  const secciones = [
    {
      id:"monitoreo",
      tittle: "MONITOREO",
      seccionData: [
        {
          url: "../images/imagesServicios/central-monitoreo1.webp",
          descripcion: "Descripción específica 1",
          info: "monitoreo de multiples camaras de seguridad para poder hacer muchas cosas bacanes"
        },
        {
          url: "../images/imagesServicios/central-monitoreo2.webp",
          descripcion: "Descripción específica 1",
          info: "Información específica 1"
        },
      ]
    },
    {
      id:"sistema-hogar",
      tittle: "SISTEMAS DE SEGURIDAD PARA EL HOGAR",
      seccionData: [
        {
          url: "../images/imagesServicios/camaras-inteligentes1.webp",
          descripcion: "Descripción específica 2",
          info: "Información específica 2"
        },
        {
          url: "../images/imagesServicios/camaras-inteligentes2.webp",
          descripcion: "Descripción específica 2",
          info: "Información específica 2"
        },
      ]
    },
    {
      id:"sistema-empresa",
      tittle: "SISTEMAS DE SEGURIDAD PARA EMPRESAS",
      seccionData: [
        {
          url: "../images/imagesServicios/costos-servicio1.webp",
          descripcion: "Descripción específica 2",
          info: "Información específica 2"
        },
        {
          url: "../images/imagesServicios/costos-servicio2.webp",
          descripcion: "Descripción específica 2",
          info: "Información específica 2"
        },
      ]
    },
    {
      id:"pinlet",
      tittle: "PINLET",
      seccionData: [
        {
          url: "../images/imagesServicios/pinlet.webp",
          descripcion: "Descripción específica 2",
          info: "Información específica 2"
        },
      ]
    },
  ];

  return (
    <div className="main-details">
      {secciones.map((section, index) => (
        <div className='segment' key={index}>
          <h1 id={section.id} className='tittle'>{section.tittle}</h1>
          <Section section={section.seccionData} />
        </div>
      ))}
    </div>
  );
}

export default Details;