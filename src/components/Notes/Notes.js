import React from "react";
import Note from "./Note";

const Notes = ({ notes, removeNote }) => (
  <div className="Notes">
    {[...notes].reverse().map(note => (
      <Note key={note.id} note={note} removeNote={removeNote} />
    ))}
  </div>
);

export default Notes;
