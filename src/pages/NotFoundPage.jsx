import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button onClick={goToHomePage} className="go-home-button">
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
