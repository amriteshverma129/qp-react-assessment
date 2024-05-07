import React, { useEffect, useState } from "react";
import { Task, TaskListProps } from "../type/type";
import TaskCard from "./TaskCard";

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);
  return (
    <div className="taskBox">
      {taskList.map((task) => (
        <React.Fragment key={task.id}>
          <TaskCard task={task} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskList;
