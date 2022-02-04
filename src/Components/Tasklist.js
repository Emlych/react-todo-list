import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Tasklist = ({ task, checked, checkTask, deleteTask }) => {
  return (
    <div className="task__list">
      <input
        type="checkbox"
        id="done"
        name="taskDone"
        className="checkbox"
        checked={checked}
        onClick={checkTask(task)}
      />
      <div className="task__list--item">{task}</div>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task)} />
    </div>
  );
};

export default Tasklist;
