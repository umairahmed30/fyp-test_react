import React,{useState,useEffect} from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import 'leaflet/dist/leaflet.css';
import ShowCrimes from "./ShowCrimes";
import Filter from "../FilterBar";
function Map() {
  const [sal,setSal]=useState(0);
  const [location,setLocation]=useState([]);
  
 useEffect(() => {
  console.log(sal+"map");

 });
  return (
    <>
      <Filter sal={sal} setSal={setSal}></Filter>
      <MapContainer   center={[34.047863,100.619652]} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ShowCrimes sal={sal} setSal={setSal} location={location} setLocation={setLocation} />
      </MapContainer>

    </>
  );
}

export default Map;
