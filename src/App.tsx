import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "./type/type";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { addTask } from "./utils/redux/taskSlice";

const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const tasks = useSelector(
    (store: { tasks: { tasks: Task[] } }) => store.tasks.tasks
  );
  const dispatch = useDispatch<Dispatch<PayloadAction<Task>>>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(addTask({ description: taskInput, completed: false }));
      setTaskInput("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Type Something to create task"
          value={taskInput}
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyPress}
        />
        {tasks && <TaskList tasks={tasks} />}
      </div>
    </div>
  );
};

export default App;
