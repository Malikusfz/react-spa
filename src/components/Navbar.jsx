import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/SearchBar.css";

function Navbar() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const handleInputChange = (event) => {
    setSearchParams({ query: event.target.value });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/?query=${searchQuery}`);
  };

  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/")}>My Notes</h1>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
    </nav>
  );
}

export default Navbar;
