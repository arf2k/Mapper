import { combineReducers } from "redux";
import mapReducer from "./map/mapReducer"
import notesReducer from "./notes/noteReducer";


const rootReducer = combineReducers({
     map: mapReducer,
     notes: notesReducer
})

export default rootReducer