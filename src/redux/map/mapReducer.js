import MapActionTypes from "./mapTypes"

const INITIAL_STATE = {
     markers: []
}

const mapReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
case MapActionTypes.ADD_MARKER: 
return {
     ...state,
}
     
     default:
          return state 
     }
}

export default mapReducer
