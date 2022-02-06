import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <div className="task">
      <div className="task__left">
        <input
          type="checkbox"
          id="done"
          name="taskDone"
          className="checkbox"
          onChange={() => completeTask(task)}
        />
        <label></label>
        <div className="task--item">{task}</div>
      </div>

      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task)} />
    </div>
  );
};

export default Task;
