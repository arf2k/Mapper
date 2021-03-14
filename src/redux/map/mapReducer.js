import MapActionTypes from "./mapTypes";

const INITIAL_STATE = {
  coords: {
    lat: "",
    lng: "",
  },
  saved: false
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MapActionTypes.ADD_MARKER:
      return {
        ...state,
        coords: [action.payload],
        saved: true 
      };

    default:
      return state;
  }
};

export default mapReducer;
