import MapActionTypes from "./mapTypes"

const location = {}

export const addMarker = coords => ({
     type: MapActionTypes.ADD_MARKER,
     payload: coords
})

