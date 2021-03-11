import React from "react";
import PostItForm from "../post-it-form/PostItForm";
import PostItList from "../post-it-list/PostItList";

const NotesContainer = ({ position }) => {
  console.log(position);

  return (
    <>
      <h1>Location name</h1>
      <PostItForm position={position} />
      <PostItList />
    </>
  );
};

export default NotesContainer;
