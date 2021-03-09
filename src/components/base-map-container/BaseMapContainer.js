import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const key = process.env.REACT_APP_GOOG_MAP_KEY;
const lib = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const center = { lat: 40.7675, lng: -73.9758 };

function BaseMapContainer(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries: lib,
  });

  if (loadError) return <h1>"Error loading maps"</h1>;
  if (!isLoaded) return <div>Loading....</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  );
}

export default BaseMapContainer;
