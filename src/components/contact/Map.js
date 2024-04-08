import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../../styles/contact/map.css'

function Map() {

    const iconoPersonalizado = new L.Icon({
        iconUrl: '/images/imagesLogo/SeguridadManrique-sinfondo.png',
        iconSize: [35, 35], 
        iconAnchor: [17.5, 35],
        popupAnchor: [0, -35],
      });

    const centroMapa = [-2.1734509, -79.8788065]

    return (
        <div className='main-map'>
            <MapContainer center={centroMapa} zoom={20} style={{ height: '80%', width: '100%', borderRadius: '20px', margin: 'auto' }} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={centroMapa} icon={iconoPersonalizado}>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;