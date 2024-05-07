import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../type/type";

const initialState: {
  tasks: Task[];
  lastId: number;
} = {
  tasks: [
    { id: 1, description: "Task 1", completed: false },
    { id: 2, description: "Task 2", completed: true },
    { id: 3, description: "Task 3", completed: false },
  ],
  lastId: 3,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newId = state.lastId++ + 1;
      state.tasks.push({ id: newId, ...action.payload });
    },
    updateStatus: (state, action) => {
      state.tasks = state.tasks.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTask, updateStatus, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
