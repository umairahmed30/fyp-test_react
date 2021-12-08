import React from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import 'leaflet/dist/leaflet.css';
import ShowCrimes from "./ShowCrimes";

function Map() {
 
  return (
    <MapContainer   center={[34.047863,100.619652]} zoom={3}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ShowCrimes />
    </MapContainer>
  );
}

export default Map;
