import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { withRouter } from "react-router-dom";
import NotesContainer from "../notes-container/NotesContainer";

const key = process.env.REACT_APP_GOOG_MAP_KEY;
const lib = ["places"];
const center = { lat: 40.7675, lng: -73.9758 };
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

function BaseMapContainer(props) {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries: lib,
  });

  if (loadError) return <h1>"Error loading maps"</h1>;
  if (!isLoaded) return <div>Loading....</div>;

  const markSetter = (e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  };
  

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={markSetter}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}

        {selectedMarker ? (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          >
            <NotesContainer
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}



export default withRouter(BaseMapContainer);
