import React, { useCallback, useEffect, useState } from "react";
import L from "leaflet";
import "./ShowCrimes.css";
import useSupercluster from "use-supercluster";
import { Marker, useMap } from "react-leaflet";
import Geocode from "react-geocode";
import {GiPositionMarker} from 'react-icons/gi';
import location from "../../Logo/location-icon-png-4250.png";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

// set response language. Defaults to english.
Geocode.setLanguage("en");


const icons = {};
const fetchIcon = (count, size) => {
  if (!icons[count]) {
    icons[count] = L.divIcon({
      html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
        ${count}
      </div>`,
    });
  }
  return icons[count];
};
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });


function ShowCrimes({ data }) {
  
  const [cityDetail,setCityDetail]=useState([]);
  function for_users(){
        fetch(`/getUsers`, {
          method: 'GET',
          
        })
        .then(response => response.json())
        .then(result => {
          result.map(user=>(user.cities.map(city=>(
            fetch(`/getLongLat?city=${city}`, {
              method: 'GET',
              
            })
            .then(response => response.json())
            .then(result => {
              console.log('Success:', result);
              setCityDetail(oldArray => [...oldArray, result]);
              
            })
            .catch(error => {
              console.error('Error:', error);
            })
          ))
          
          ));
          
        })
        .catch(error => {
          console.error('Error:', error);
        });
}

  const cities=[{name:"lahore",long:"31.520370",lat:"74.358749"},
                {name:"gujranwala",long:" 32.16408",lat:"74.18422 "},
                {name:"gujranwala",long:" 32.16408",lat:"74.18422 "},

                {name:"lahore",long:"31.520170",lat:"74.358009"},
                {name:"karchi",long:"24.860735",lat:"67.001137"},
                {name:"karchi",long:"24.860735",lat:"67.001137"},
                {name:"karchi",long:"24.860735",lat:"67.001137"}
                  ];
  

  const maxZoom = 22;
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(12);
  const map = useMap();
  //var map = L.map('map', { attributionControl:false });
  // get map bounds
  function updateMap() {

    
    console.log("updating");
    const b = map.getBounds();
    setBounds([
      b.getSouthWest().lng,
      b.getSouthWest().lat,
      b.getNorthEast().lng,
      b.getNorthEast().lat,
    ]);
    setZoom(map.getZoom());
  }

  const onMove = useCallback(() => {
    updateMap();
  }, [map]);

  React.useEffect(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    for_users();
    map.on("move", onMove);
    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);

  // const points = data.map((crime) => ({
  //   type: "Feature",
  //   properties: { cluster: false, crimeId: crime.id, category: crime.category },
  //   geometry: {
  //     type: "Point",
  //     coordinates: [
  //       parseFloat(crime.location.longitude),
  //       parseFloat(crime.location.latitude),
  //     ],
  //   },
  // }));

  const points=cityDetail.map((city)=>({
     type: "Feature",
     properties: { cluster: false,cityName:city.name },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(city.lng),
          parseFloat(city.lat),
        ],
      },    

  }));

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: bounds,
    zoom: zoom,
    options: { radius: 75, maxZoom: 17 },
  });

  console.log(clusters.length);

  return (
    <>
      {clusters.map((cluster) => {
        // every cluster point has coordinates
        const [longitude, latitude] = cluster.geometry.coordinates;
        // the point may be either a cluster or a crime point
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        // we have a cluster to render
        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              position={[latitude, longitude]}
              icon={fetchIcon(
                pointCount,
                10 + (pointCount / points.length) * 40
              )}
              eventHandlers={{
                click: () => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    maxZoom
                  );
                  map.setView([latitude, longitude], expansionZoom, {
                    animate: true,
                  });
                },
              }}
            />
          );
        }

        // we have a single point (crime) to render
        return (
          <>
          {/* <Marker
            key={`crime-${cluster.properties.cityName}`}
            position={[latitude, longitude]}
            
          /> */}
          <Marker position={[latitude, longitude]}  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}   />
          </>
        );
      })}
    </>
  );
}

export default ShowCrimes;
