import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/SearchBar.css";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const handleInputChange = (event) => {
    setSearchParams({ query: event.target.value });
  };

  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchBar;
