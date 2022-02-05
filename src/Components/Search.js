import React from "react";

const Search = ({ search, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="search task"
        className="input-task"
      />
    </div>
  );
};

export default Search;
