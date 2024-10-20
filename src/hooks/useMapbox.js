import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

// logitude, latitude
const VISUAL_VERBAL_COORDINATES = [-118.23623, 34.06581];

// An array of coordinates for multiple markers
const MARKER_COORDINATES = [
  [-118.23623, 34.06581],
  [-118.24623, 34.07581],
  [-118.25623, 34.08581],
];

const useMapbox = (containerId, accessToken) => {
  useEffect(() => {
    // Set the access token for Mapbox
    mapboxgl.accessToken = accessToken;

    // Create the Mapbox map instance
    const map = new mapboxgl.Map({
      container: containerId,
      style: "mapbox://styles/mapbox/light-v11", // Use any valid Mapbox style
      center: VISUAL_VERBAL_COORDINATES,
      zoom: 10.12,
      projection: "globe", // Display the map as a globe
    });

    // Add basic controls like zoom and rotation
    map.addControl(new mapboxgl.NavigationControl());

    // Function to add a marker to the map
    const addMarker = (coordinates) => {
      new mapboxgl.Marker({
        color: "#FFFFFF", // Custom marker color
        draggable: true, // Allow dragging the marker
      })
        .setLngLat(coordinates)
        .addTo(map);
    };

    MARKER_COORDINATES.forEach((coord) => addMarker(coord));

    // Clean up when the component unmounts
    return () => map.remove();
  }, [containerId, accessToken]);
};

export default useMapbox;

// center: [34.06581, -118.23623]
// https://media.istockphoto.com/id/2167996762/photo/flamingos-on-lake.jpg?s=1024x1024&w=is&k=20&c=SwMgbR6f0EZ8HiyCn46kYOWzXDoWY11QbRByAh4XRPE=
