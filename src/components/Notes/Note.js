import React from "react";

const Note = ({ note, removeNote }) => (
  <div className={`Note note-${note.bg}`}>
    {note.text}
    <span
      onClick={() => removeNote(note)}
      role="img"
      aria-label="remove note"
      className="delete-note"
    >
      &#10060;
    </span>
  </div>
);

export default Note;
