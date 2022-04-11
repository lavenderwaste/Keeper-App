import React from 'react';
import Heading from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes.js'

function App() {
  return (
    <div>
      <Heading />
      {notes.map((noteItem) => (
        <Note
          key = {noteItem.id}
          title = {noteItem.title}
          content = {noteItem.content}
        />
      ))};
      <Footer />
    </div>
  );
}

export default App;
