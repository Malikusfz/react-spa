import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../styles/Note.css";

function Note({ id, title, body, createdAt, onDelete }) {
  const navigate = useNavigate();

  // Function to format the date
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const handleNoteClick = () => {
    navigate(`/notes/${id}`);
  };

  return (
    <div className="container">
      {" "}
      {/* Add this container div */}
      <div className="note" onClick={handleNoteClick}>
        <h2>{title}</h2>
        <p>{body}</p>
        <small>Created at: {formatDate(createdAt)}</small>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
