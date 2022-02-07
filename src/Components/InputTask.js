import React from "react";
import axios from "axios";

const InputTask = ({ task, handleInput, addTask }) => {
  //Link to backend
  window.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();

      //once name:task works, add isComplete: false in data
      const data = { name: task }; //data that comes from input
      //axios to send
      const response = await axios.post(
        "https://todo-list-eld.herokuapp.com/task/create",
        data
      );
      console.log("response is here ==>", response.data);
    } catch (error) {
      console.log("error message : ", error.message);
      console.log("error response : ", error.response);
    }
  });

  return (
    <form onSubmit={addTask} className="main__input" id="input-task">
      <input
        type="text"
        name="task"
        className="input-task"
        placeholder="new task"
        value={task}
        onChange={handleInput}
      />
      <input
        type="submit"
        value="Add task"
        className="violet-btn"
        id="add-task"
      />
    </form>
  );
};

export default InputTask;
