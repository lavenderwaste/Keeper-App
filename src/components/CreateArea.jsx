import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  //Hold the state of rendering for animation
  const [isExpanded, setExpanded] = useState(false);

// Create a constant that keeps track of the title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    //after finishing last step we need to clear the note inputs
    setNote({
      title: "",
      content: ""
    });
    //avoids page reloading when submitting data
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

//Pass the new note back to the App

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
      <Zoom in={isExpanded} >
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
