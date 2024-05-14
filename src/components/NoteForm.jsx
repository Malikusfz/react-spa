import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/NoteForm.css";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && body) {
      onAddNote({
        title,
        body,
        createdAt: new Date().toISOString(),
      });
      setTitle("");
      setBody("");
    } else {
      alert("Both title and body are required.");
    }
  };

  return (
    <div className="note-form-container">
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="note-title-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="note-body-textarea"
          placeholder="Write your note here..."
          rows="4"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" className="note-submit-btn">
          Add Note
        </button>
      </form>
    </div>
  );
}

NoteForm.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NoteForm;
