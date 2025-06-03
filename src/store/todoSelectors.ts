import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "./store";

export const selectTodos = (state: RootState) => state.todos;

export const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.completed),
);

export const selectUncompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => !todo.completed),
);
