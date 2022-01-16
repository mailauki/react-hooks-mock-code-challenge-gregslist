import React, { useState } from "react";

function Search({ onSearchSubmit }) {
  const [searchedValue, setSearchedValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(searchedValue);
    setSearchedValue("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchedValue}
        onChange={(e) => setSearchedValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
