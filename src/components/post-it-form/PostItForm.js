import React, { useState } from "react";
import { connect } from "react-redux";
import { addMarker } from "../../redux/map/mapActions";
import { addNote } from "../../redux/notes/noteActions";

const PostItForm = ({ addNote, addMarker, position }) => {
  const [text, setText] = useState("");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (text !== "") {
      addNote(text);
      setText("");
    }
  };

  const savePlace = (e) => {
    e.preventDefault();
    addMarker({ lat: position.lat, lng: position.lng });
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Add a note"
            onChange={changeHandler}
            value={text}
          />
          <button onClick={handleAdd}>Add Note</button>
          <button onClick={savePlace}>Save Location</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note)),
  addMarker: (coords) => dispatch(addMarker(coords)),
});

export default connect(null, mapDispatchToProps)(PostItForm);
