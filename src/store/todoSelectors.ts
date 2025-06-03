import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "./store";

export const selectTodos = (state: RootState) => state.todos;

export const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos
    .filter((todo) => todo.completed)
    .sort(
      (a, b) =>
        new Date(b.completedAt!).getTime() - new Date(a.completedAt!).getTime(),
    ),
);

export const selectUncompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => !todo.completed),
);
