import React from "react";
import Tasklist from "./Tasklist";
import { useState } from "react";

const Main = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    const newTaskList = [...taskList];
    newTaskList.push(task);
    setTaskList(newTaskList);
  };

  const deleteTask = (task) => {
    for (let i = 0; i < taskList.length; i++) {
      taskList[i] === task && taskList.splice(i, 1);
    }
    const newTaskList = [...taskList];
    setTaskList(newTaskList);
  };

  const checkTask = (task) => {
    console.log("check ===> ", task);
    setChecked(true);
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
            <Tasklist
              key={index}
              task={item}
              checked={checked}
              checkTask={checkTask}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
