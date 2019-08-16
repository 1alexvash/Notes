import React from "react";
import { useState, useEffect, useRef } from "react";

import Preloader from "./components/Preloader/Preloader";
import Notes from "./components/Notes/Notes";
import AddNote from "./components/AddNote/AddNote";

import "./scss/main.css";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 0,
      text: "Hangout with Jessica",
      bg: "white"
    },
    {
      id: 1,
      text: "Buy Groceries for a week",
      bg: "white"
    },
    {
      id: 2,
      text: "Reached out to John about new job",
      bg: "deepskyblue"
    },
    {
      id: 3,
      text: "Take a French class",
      bg: "orange"
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
      <Preloader />
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
