import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
  } from 'react-simple-maps'
  
  
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";
  
  const markers = [
    {
      markerOffset: -30,
      name: "UFSC",
      coordinates: [-48.5175778, -27.5999722],
    },
    { markerOffset: 15, name: "UFPA", coordinates: [-48.451, -1.474] },
    { markerOffset: 15, name: "UNIFEI", coordinates: [-45.449, -22.412] },
    { markerOffset: 15, name: "UnB", coordinates: [-47.872, -15.765] },
    { markerOffset: 15, name: "COPPE", coordinates: [-43.2289, -22.862] },
    { markerOffset: 15, name: "UFC", coordinates: [-38.5767, -3.7437] },
    { markerOffset: 15, name: "USP-SC", coordinates: [-47.897, -22.0] },
    { markerOffset: 15, name: "UTFPR", coordinates: [-49.268, -25.43959] },
    // { markerOffset: 15, name: "UFSC", coordinates: [-48.5175778, -27.5999722] },
    { markerOffset: 15, name: "UNIR", coordinates: [-63.933, -8.8347] },
    { markerOffset: 15, name: "UFMT", coordinates: [-56.063, -15.607] },
    { markerOffset: 15, name: "UNIPAMPA", coordinates: [-55.768, -29.789] },
    { markerOffset: 15, name: "UFMG", coordinates: [-43.961, -19.869] },
    { markerOffset: 15, name: "UFMS", coordinates: [-54.6166, -20.5067] },
    { markerOffset: 15, name: "UFPE", coordinates: [-34.9545, -8.053] },
    { markerOffset: 15, name: "UFT", coordinates: [-48.36166, -10.1771] },
    { markerOffset: 15, name: "UFMA", coordinates: [-44.3078, -2.559] },
    { markerOffset: 15, name: "UFJF", coordinates: [-43.366, -21.778] },
    { markerOffset: 15, name: "UFBA", coordinates: [-38.5, -13.0] },
    { markerOffset: 15, name: "UFRGS", coordinates: [-51.22, -30.02] },
    { markerOffset: 15, name: "UFAC", coordinates: [-67.869, -9.957] },
    { markerOffset: 15, name: "UFAM", coordinates: [-59.96, -3.088] },
    { markerOffset: 15, name: "UNIFAP", coordinates: [-51.08, -0.0063] },
    { markerOffset: 15, name: "UFRR", coordinates: [-60.698, 2.83] },
    { markerOffset: 15, name: "PTI", coordinates: [-54.5851, -25.447] },
    { markerOffset: 15, name: "UFES", coordinates: [-40.3, -20.27] },
    { markerOffset: 15, name: "UNICAMP", coordinates: [-47.066207, -22.821167] },
    { markerOffset: 15, name: "UFPR", coordinates: [-49.261775, -25.426846] },
    { markerOffset: 15, name: "UFPI", coordinates: [-42.800280, -5.057118] },
  ];
  
  const MapChart = () => {
    return (
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [58, 20, 0],
          scale: 400
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#0521A8" stroke="#fff" strokeWidth={1}  />
            <text
              textAnchor="middle"
              y={markerOffset}
              fontSize={5}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D"}}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    );
  };
  
  export default MapChart;