import React from "react";
import Task from "./Task";
import Taskv2 from "./Taskv2";
import Search from "./Search";
import { useState } from "react";

const Main = () => {
  //States for task and task list
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
    setTask(""); //empty value in input
  };

  // Remove Task from tasklist
  const deleteTask = (task) => {
    for (let i = 0; i < taskList.length; i++) {
      taskList[i] === task && taskList.splice(i, 1);
    }
    setTaskList([...taskList]);
  };

  // New array of completed tasks
  const [completeList, setCompleteList] = useState([]);
  const completeTask = (task) => {
    const newcompleteList = [task, ...completeList];
    setCompleteList(newcompleteList);
    deleteTask(task);
  };

  //Search for tasks in tasklist
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const searchedTask = taskList.filter((item) => {
    return item.includes(search);
  });

  return (
    <div className="main">
      {/* Search tasks */}
      <Search search={search} handleSearch={handleSearch} />
      <div>
        {search &&
          searchedTask.map((element, index) => (
            <div key={index}>{element}</div>
          ))}
      </div>

      {/* list of tasks completed */}
      <div className="completeTasks task done">
        {completeList.map((item, index) => {
          return <div className="task--item">{item}</div>;
        })}
      </div>

      {/* input zone to enter your new tasks */}
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

      {/* ---------------------------------------------------------- */}
      {/* when task completed, line through task but don't move it */}
      {/* <div className="list">
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
      </div> */}

      {/* ------------------------------------------------------------ */}
      {/* when task completed, line through task and moves it under input bar */}
      <div className="list">
        {taskList.map((item, index) => {
          return (
            <Taskv2
              key={index}
              task={item}
              taskList={taskList}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
