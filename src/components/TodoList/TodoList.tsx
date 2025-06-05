import { useRef } from "react";
import type { FC } from "react";

import TodoItem from "@/components/TodoItem/TodoItem.tsx";
import { useAppDispatch, useAppSelector } from "@/hooks.ts";
import {
  selectCompletedTodos,
  selectUncompletedTodos,
} from "@/store/todoSelectors.ts";
import { toggleCompleted } from "@/store/todosSlice.ts";
import clsx from "clsx";
import { useDrop } from "react-dnd";

import styles from "./TodoList.module.scss";

interface TodoListProps {
  title: string;
  filter: "all" | "completed" | "active";
}

const TodoList: FC<TodoListProps> = (props) => {
  const { filter, title } = props;
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const todos = useAppSelector((state) => {
    switch (filter) {
      case "completed":
        return selectCompletedTodos(state);
      case "active":
        return selectUncompletedTodos(state);
      default:
        return state.todos;
    }
  });
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: "todo",
    drop: (item: { id: string }) => {
      if (filter === "completed") {
        dispatch(toggleCompleted({ id: item.id }));
      } else if (filter === "active") {
        dispatch(toggleCompleted({ id: item.id }));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  dropRef(ref);

  return (
    <>
      <div
        className={clsx(styles.wrapper, isOver && canDrop && styles.dropTarget)}
        ref={ref}
      >
        <p className={styles.title}>
          {title} {todos.length}
        </p>
        {todos.length > 0 && (
          <ul className={clsx(styles.list, styles[`list--${filter}`])}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TodoList;
