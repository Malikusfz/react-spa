import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote } from "../utils/local-data";
import "../styles/NoteDetailPage.css";

function NoteDetailPage() {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page starts at the top

    const fetchedNote = getNote(id);
    if (fetchedNote) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = new Date(fetchedNote.createdAt).toLocaleDateString(
        "id-ID",
        options
      );
      setNote({ ...fetchedNote, createdAt: formattedDate });
    } else {
      // If the note is not found, navigate to the NotFoundPage
      navigate("/404", { replace: true });
    }
  }, [id, navigate]);

  if (!note) {
    return <p>Loading note details...</p>;
  }

  return (
    <>
      <div className="navbar">
        <h1>Note Details</h1>
        <button className="back-button" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
      <div className="note-detail-page">
        <div className="note-detail-container">
          <h2 className="note-detail-title">
            {note?.title || "Note not found"}
          </h2>
          <p className="note-detail-body">
            {note?.body ||
              "The note you are looking for does not exist or has been removed."}
          </p>
          <small className="note-detail-created-at">
            Created at: {note?.createdAt || "N/A"}
          </small>
        </div>
      </div>
    </>
  );
}

export default NoteDetailPage;
