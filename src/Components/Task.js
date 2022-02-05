import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Task = ({ task, deleteTask, taskList }) => {
  const [checked, setChecked] = useState(false);
  const checkTask = () => {
    setChecked(!checked);
  };
  return (
    <div className="task__list">
      <input
        type="checkbox"
        id="done"
        name="taskDone"
        className="checkbox"
        checked={checked}
        onChange={() => checkTask(task)}
      />
      <div className={checked ? "task__list--item done" : "task__list--item"}>
        {task}
      </div>
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task)} />
    </div>
  );
};

export default Task;
