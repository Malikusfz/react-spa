import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import "../styles/NoteList.css"; // Make sure to import the CSS file

function NoteList({ notes, onDeleteNote }) {
  return (
    <div className="container">
      {" "}
      {/* Add this container div */}
      <ul className="note-list">
        {notes.map((note, index) => (
          <li
            key={note.id}
            className={`note-list-item ${index === 0 ? "item-0" : ""}`}
          >
            <Note
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              onDelete={onDeleteNote}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NoteList;
