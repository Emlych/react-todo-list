import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Task = ({ task, deleteTask }) => {
  //Deals with task completed with boolean checked
  const [checked, setChecked] = useState(false);
  const checkTask = () => {
    setChecked(!checked);
  };

  return (
    <div className="task">
      <div className="task__left">
        <input
          type="checkbox"
          id="done"
          name="taskDone"
          className="checkbox"
          checked={checked}
          onChange={() => checkTask(task)}
        />
        {/* Condition on list done or not */}
        <div className={checked ? "task--item done" : "task--item"}>{task}</div>
      </div>

      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task)} />
    </div>
  );
};

export default Task;
