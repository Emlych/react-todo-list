import React from "react";

const InputTask = ({ task, handleInput, addTask }) => {
  return (
    <div className="main__input">
      <input
        type="text"
        name="task"
        className="input-task"
        placeholder="new task"
        value={task}
        onChange={handleInput}
      />
      <button className="violet-btn" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default InputTask;
