import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";
import Navbar from "../components/Navbar";
import {
  getActiveNotes,
  addNoteToData,
  deleteNoteFromData,
} from "../utils/local-data";
import "../styles/HomePage.css";

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  useEffect(() => {
    const activeNotes = getActiveNotes();
    const filteredNotes = activeNotes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setNotes(filteredNotes);
  }, [searchQuery]);

  const handleAddNote = (newNote) => {
    const noteWithId = addNoteToData(newNote); // Pastikan fungsi ini mengembalikan catatan baru dengan id
    setNotes((prevNotes) => [noteWithId, ...prevNotes]);
  };

  const handleDeleteNote = (noteId) => {
    deleteNoteFromData(noteId);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <>
      <Navbar />
      <div className="home-page">
        <NoteForm onAddNote={handleAddNote} />
        {notes.length > 0 ? (
          <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
        ) : (
          <p>Tidak ada catatan.</p>
        )}
      </div>
    </>
  );
}

export default HomePage;
