import React from "react";
import mapboxgl from "mapbox-gl";
import useMapbox from "../hooks/useMapbox"; // Import the custom hook
import "./Map.css"; // We'll create this file for styling the map

const Map = () => {
  const accessToken =
    "pk.eyJ1IjoibmJyZXdzdGVyIiwiYSI6ImNtMmU2MnNobDAxeXUya212YTBlcHA1ZGkifQ.LRR7wNoJsub8QieTV9NoVA"; // Replace with your Mapbox token

  // Use the custom hook to initialize the Mapbox map
  useMapbox("map", accessToken);

  return (
    <div id="map" className="map-container">
      {/* This div will be used as the container for the map */}
    </div>
  );
};

export default Map;
