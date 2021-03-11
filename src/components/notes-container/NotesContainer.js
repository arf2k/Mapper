import React from "react";
import PostItForm from "../post-it-form/PostItForm";
import PostItList from "../post-it-list/PostItList";



const NotesContainer = ({position}) => {
     
    
     
     return(
          <>
          <h1>Location Name Here</h1>
          <PostItForm position={position}/>
          <PostItList/>
          </>
     )
}

export default (NotesContainer)