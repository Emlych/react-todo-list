import React from "react";
import Task from "./Task";
import { useState } from "react";

const Main = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Update task value before adding it to a the tasklist
  const handleInput = (event) => {
    setTask(event.target.value);
  };

  // Add input value to tasklist
  const addTask = () => {
    const newTaskList = [task, ...taskList];
    setTaskList(newTaskList);
  };

  // Remove Task from tasklist
  const deleteTask = (task) => {
    for (let i = 0; i < taskList.length; i++) {
      taskList[i] === task && taskList.splice(i, 1);
    }
    const newTaskList = [...taskList];
    setTaskList(newTaskList);
  };

  return (
    <div className="main">
      <div className="main-input">
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

      <div className="list">
        {taskList.map((item, index) => {
          return (
            <Task
              key={index}
              task={item}
              taskList={taskList}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
