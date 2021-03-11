import MapActionTypes from "./mapTypes";

const INITIAL_STATE = {
  coords: {
    lat: "",
    lng: "",
  },
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MapActionTypes.ADD_MARKER:
      return {
        ...state,
        coords: [action.payload],
      };

    default:
      return state;
  }
};

export default mapReducer;
