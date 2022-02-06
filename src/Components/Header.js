import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

const Header = ({ toggleLight }) => {
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__left">
          <FontAwesomeIcon icon={faListAlt} />
          <h1>Todo List</h1>
        </div>
        <button onClick={toggleLight}>NIGHT MODE</button>
      </div>
    </div>
  );
};

export default Header;
