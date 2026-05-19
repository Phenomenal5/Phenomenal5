import useCorrodinate from '../hooks/useCoordinate';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import React from 'react'


const MapComponent = () => {

    const {latitude, longitude, error} = useCorrodinate()
    // const position = [51.505, -0.09]

    if(error) return <p>{error}</p>
    if(!latitude || !longitude) return <p>Getting your location...</p>

  return (
    <div style={{height : 500 , width: 1200}}>
      <MapContainer style = {{height : '100%'}} center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent