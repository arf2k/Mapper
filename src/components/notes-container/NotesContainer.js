import React from "react";
import PostItForm from "../post-it-form/PostItForm";
import PostItList from "../post-it-list/PostItList";

const NotesContainer = ({ props }) => {


  console.log(props)

  return (
    <>
      <PostItForm />
      <PostItList />
    </>
  );
};
// position={props.position} 

export default NotesContainer;
