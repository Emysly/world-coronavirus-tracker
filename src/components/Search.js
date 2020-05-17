import React from "react";

function Search({ onSearch }) {
  return (
    <form onSubmit={onSearch} className="searchbox-wrap">
      <input
        type="text"
        className="input-box"
        placeholder="search for country..."
      />
      <button className="btn">Search</button>
    </form>
  );
}

export default Search;
