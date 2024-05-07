import React from "react";
import CheckIcon from "../utils/icons/CheckIcon";
import CrossIcon from "../utils/icons/CrossIcon";
import { Task } from "../type/type";
import "./Task.css";
import { useDispatch } from "react-redux";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { removeTask, updateStatus } from "../utils/redux/taskSlice";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const dispatch = useDispatch<Dispatch<PayloadAction<number>>>();

  return (
    <div className="taskCard">
      <span
        style={{ backgroundColor: task.completed ? "aqua" : "" }}
        onClick={() => dispatch(updateStatus(task.id))}
      >
        <CheckIcon />
      </span>
      <input type="text" value={task.description} />
      <span onClick={() => dispatch(removeTask(task.id))}>
        <CrossIcon />
      </span>
    </div>
  );
};

export default TaskCard;
