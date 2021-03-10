import React, {useState} from "react";
import { connect } from "react-redux";
import { addNote } from "../../redux/notes/noteActions";

const PostItForm = ({ addNote, history }) => {
     
     const [text, setText] = useState("")

     const changeHandler = (e) => {
          setText(e.target.value)
     }

     const handleAdd = (e) => {
          e.preventDefault()
          if(text !== "") {
               addNote(text)
               setText("")
          }
     }
     return(
          <>
     <div>
     <h5>Make a note</h5>
     <form onSubmit={handleAdd}>
     <input type="text" onChange={changeHandler}/>
     <button>Add Note</button>
     <button onclick={()=> history.push("/mapper")}>Maps and Notes</button>
     </form>
     </div>
     </>
     )

}

const mapDispatchToProps = dispatch => ({
     addNote: note => dispatch(addNote(note))
})

export default connect(null, mapDispatchToProps)(PostItForm)