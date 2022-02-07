import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ search, handleSearch }) => {
  return (
    <div className="main__input">
      <label>
        <FontAwesomeIcon icon={faSearch} /> Search for :
      </label>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="type task"
        className="input-task"
      />
    </div>
  );
};

export default Search;
