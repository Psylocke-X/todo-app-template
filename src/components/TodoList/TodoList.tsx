import type { FC } from "react";

import TodoItem from "@/components/TodoItem/TodoItem.tsx";
import type { RootState } from "@/store/store";
import {
  selectCompletedTodos,
  selectUncompletedTodos,
} from "@/store/todoSelectors.ts";
import { useSelector } from "react-redux";

import styles from "./TodoList.module.scss";

interface TodoListProps {
  title: string;
  filter: "all" | "completed" | "active";
}

const TodoList: FC<TodoListProps> = (props) => {
  const { filter, title } = props;

  const todos = useSelector((state: RootState) => {
    switch (filter) {
      case "completed":
        return selectCompletedTodos(state);
      case "active":
        return selectUncompletedTodos(state);
      default:
        return state.todos;
    }
  });

  if (todos.length === 0) return null;

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.title}>
          {title} {todos.length}
        </p>
        <ul className={styles.list}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
