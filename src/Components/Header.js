import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = ({ light, toggleLight }) => {
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__left">
          <FontAwesomeIcon icon={faListAlt} />
          <h1>Todo List</h1>
        </div>

        <div className="toggle__button">
          <button
            className={light ? `switch switch-light` : "switch "}
          ></button>
          <button
            onClick={toggleLight}
            className={light ? `slider slider-light` : "slider"}
          >
            {light ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
