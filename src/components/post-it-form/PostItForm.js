import React, { useState } from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/notes/noteActions";

const PostItForm = ({ addNote, history }) => {
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
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeHolder="Add a note"
            onChange={changeHandler}
            value={text}
          />
          <button onClick={handleAdd}>Add Note</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note)),
});

export default connect(null, mapDispatchToProps)(PostItForm);
