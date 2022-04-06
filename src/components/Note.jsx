import React from 'react';

function Note() {

  const titleNote = "This is note title";
  const contentNote = "This is the note content";

  return (
    <div class="note">
      <h3>{titleNote}</h3>
      <p>{contentNote}</p>
    </div>
  );
}

export default Note;
