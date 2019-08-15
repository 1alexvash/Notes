import React from "react";

const AddNote = ({ onSubmit, noteColor, changeNoteColor, defaultColors }) => {
  return (
    <form
      style={{ background: noteColor }}
      className="Add-Note"
      onSubmit={e => onSubmit(e)}
    >
      <span className={`new-note new-note-bg-${noteColor}`}>New Note</span>
      <textarea name="newNote" required rows="5" />
      <div className="confirmation">
        <div className="note-color">
          {defaultColors.map(color => (
            <span
              key={color}
              className={`color color-${color} ${
                noteColor === color ? "active" : ""
              }`}
              onClick={() => changeNoteColor(color)}
            />
          ))}
        </div>
        <button type="submit">Add Note</button>
      </div>
    </form>
  );
};

export default AddNote;
