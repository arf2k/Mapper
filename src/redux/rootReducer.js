import { combineReducers } from "redux";
import mapReducer from "./map/mapReducer"


const rootReducer = combineReducers({
     map: mapReducer,
})

export default rootReducer