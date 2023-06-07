import React from 'react';
import { MapContainer, TileLayer, Marker  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const customIcon = icon({
  iconUrl: FmdGoodIcon,
  iconSize: [1000, 1000], // Set the icon size
  iconAnchor: [25.0349234,121.3852018], // Set the icon anchor point
});

const Map = () => {
  const center = [25.0349234,121.3852018]; // Initial map center
  const zoom = 15; // Initial map zoom level

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FmdGoodIcon>
        <Marker  position={center} icon={customIcon}/>
      </FmdGoodIcon>
    </MapContainer>
  );
};

export default Map