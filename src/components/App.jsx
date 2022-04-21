import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //1. After passing the note data to the App then we need to add new
  //note to an array.
    //1. We start with an empty array since there are no notes, but new
    //notes will be added in the setNotes state.
  const [notes, setNotes] = useState([]);

  //1. We need to pass the CreateArea note data to the App in <CreateArea />
  function addNote(newNote) {
    //1. Need to hold prev values of notes array
    setNotes(prevNotes => {
      //1. use the spread operator to hold all previous setNotes and add the
      //new note at the end
      return [...prevNotes, newNote];
    });
  }

  //2. We need to get the id of note to be deleted and create the prop (onDelete)
  function deleteNote(id) {
    setNotes(prevNotes => {
      //loop on the previous Notes and filter by id to delete
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  //1. The note.map() takes the array and render seperate Note
  //components for each item.

  //2. The key and id {index} is the last step, pass an id over the
  //note component, pass it back to the App when deleting it

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
      );
      })}
      <Footer />
    </div>
  );
}

export default App;
