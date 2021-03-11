import MapActionTypes from "./mapTypes"


export const addMarker = (coords) => ({
     type: MapActionTypes.ADD_MARKER,
     payload: coords
})

