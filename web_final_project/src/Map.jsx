import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Map = () => {
    useEffect(() => {
      // Create the map container
      const map = L.map('map').setView([51.505, -0.09], 13);
  
      // Create and add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors',
      }).addTo(map);
  
      // Add a marker to the map
      L.marker([51.5, -0.09]).addTo(map);
    }, []);
  
    return <div id="map" style={{ height: '180px' }} />;
  };
  
  export default Map