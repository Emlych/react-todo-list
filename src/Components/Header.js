import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faListAlt} />
      <h1>Todo List</h1>
    </div>
  );
};

export default Header;
