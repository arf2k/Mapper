import MapActionTypes from "./mapTypes"

let coords = {lat: "", lng: ""}
export const addMarker = (coords) => ({
     type: MapActionTypes.ADD_MARKER,
     payload: coords
})

