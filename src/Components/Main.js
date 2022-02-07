import React from "react";
// import Task from "./Task";    //when task completed, line through task but don't move it
import Taskv2 from "./Taskv2";
import InputTask from "./InputTask";
import Search from "./Search";
import { useState } from "react";

const Main = ({ light }) => {
  //States for task and task list
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Update task value before adding it to a the tasklist
  const handleInput = (event) => {
    setTask(event.target.value);
  };

  // Add input value to tasklist
  const addTask = (event) => {
    event.preventDefault();
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

  //Search for tasks in tasklist
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const searchedTask = taskList.filter((item) => {
    return item.toLowerCase().includes(search);
  });

  // New array of completed tasks
  const [completeList, setCompleteList] = useState([]);
  const completeTask = (task) => {
    const newcompleteList = [task, ...completeList];
    setCompleteList(newcompleteList);
    deleteTask(task);
  };

  //Reset array of completed tasks
  const emptyCompleteList = () => {
    setCompleteList([]);
  };

  return (
    <div className="main container">
      {/* Input zone to enter your new tasks */}
      <InputTask task={task} handleInput={handleInput} addTask={addTask} />

      {/* Search tasks */}
      <Search search={search} handleSearch={handleSearch} />

      {/* Two ways to display list of tasks */}

      {/* ---------------------------------------------------------- */}
      {/* when task completed, line through task but don't move it */}
      {/* <div className="list">
        {taskList.map((item, index) => {
          return (
            <Task key={index} task={item} taskList={taskList} deleteTask={deleteTask} />
          );
        })}
      </div> */}

      {/* ------------------------------------------------------------ */}
      {/* when task completed, line through task and moves it under input bar */}
      <div className={light ? "list list__light" : "list list__dark"}>
        {(!search ? taskList : searchedTask).map((item, index) => {
          return (
            <Taskv2
              key={index}
              task={item}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>

      <button className="violet-btn" onClick={emptyCompleteList}>
        Reset completed tasks
      </button>

      {/* list of tasks completed */}
      <div className="completeTasks task done">
        {completeList.map((item, index) => {
          return <div className="task--item">{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Main;
