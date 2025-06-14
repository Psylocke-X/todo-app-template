import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  completedAt: string | null;
}

const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
        completedAt: null,
      });
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleted: (state, action: PayloadAction<{ id: string }>) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
        if (todo.completed) {
          todo.completedAt = new Date().toISOString();
        } else {
          todo.completedAt = null;
        }
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
