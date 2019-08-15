import React from "react";
import { useState, useEffect, useRef } from "react";

import Notes from "./components/Notes/Notes";
import AddNote from "./components/AddNote/AddNote";

import "./scss/main.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "Go for a walk with Jessica",
      bg: "white"
    },
    {
      id: 1,
      text: "Buy Milk",
      bg: "white"
    },
    {
      id: 2,
      text: "Find a new job",
      bg: "black"
    }
  ]);
  const [noteColor, setNoteColor] = useState("white");
  const defaultColors = [
    "white",
    "red",
    "orange",
    "green",
    "lightgreen",
    "blue",
    "deepskyblue",
    "purple",
    "pink",
    "black"
  ];

  function updateNotesAndSave() {
    localStorage.notes = JSON.stringify(notes);
  }

  function getNotes() {
    setNotes(JSON.parse(localStorage.notes));
  }

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      updateNotesAndSave();
    }

    // eslint-disable-next-line
  }, [notes]);

  useEffect(() => {
    if (localStorage.notes !== undefined) {
      getNotes();
    }
    // eslint-disable-next-line
  }, []);

  function addNote(e) {
    e.preventDefault();

    if (e.target.newNote.value !== "") {
      const newNote = {
        id: new Date(),
        text: e.target.newNote.value,
        bg: noteColor
      };
      setNotes([...notes, newNote]);
      e.target.newNote.value = "";
    }
  }

  function removeNote(note) {
    setNotes(notes.filter(curNote => curNote !== note));
  }

  function changeNoteColor(newColor) {
    setNoteColor(newColor);
  }

  return (
    <div className="App">
      <AddNote
        onSubmit={addNote}
        noteColor={noteColor}
        changeNoteColor={changeNoteColor}
        defaultColors={defaultColors}
      />
      <Notes notes={notes} removeNote={removeNote} />
    </div>
  );
};

export default App;

/*
  Features to implement
  # responsibility
  # Publish to gh-pages
*/
