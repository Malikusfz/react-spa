import React, { useState, useEffect } from "react";
import Note from "../components/Note";
import { getArchivedNotes } from "../utils/local-data";
import "../styles/ArchivedNotesPage.css";

function ArchivedNotesPage() {
  const [archivedNotes, setArchivedNotes] = useState([]);

  useEffect(() => {
    setArchivedNotes(getArchivedNotes());
  }, []);

  return (
    <div className="archived-notes-page">
      <h1>Archived Notes</h1>
      <div className="notes-container">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => <Note key={note.id} {...note} />)
        ) : (
          <p>No archived notes</p>
        )}
      </div>
    </div>
  );
}

export default ArchivedNotesPage;
