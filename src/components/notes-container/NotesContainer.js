import React from "react";
import PostItForm from "../post-it-form/PostItForm";
import PostItList from "../post-it-list/PostItList"

const NotesContainer = () => {
     return(
          <>
          <h1>NotesContainer</h1>
          <PostItForm/>
          <PostItList/>
          </>
     )
}
export default NotesContainer