import React from "react";
import BaseMapContainer from "../components/base-map-container/BaseMapContainer";
import NotesContainer from "../components/notes-container/NotesContainer"

const Mapper = () => {

     return(
          <>
          <h1>Mapper page</h1>
          <BaseMapContainer/>
          <NotesContainer/>
          </>
     )
}

export default Mapper