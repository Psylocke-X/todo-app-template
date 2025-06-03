import type { FC } from "react";

import TrashSimple from "@/assets/icons/TrashSimple.svg?react";
import { useAppDispatch } from "@/hooks.ts";
import { deleteTodo, toggleCompleted } from "@/store/todosSlice.ts";
import clsx from "clsx";

import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
}

const TodoItem: FC<TodoItemProps> = (props) => {
  const { id, text, completed } = props;
  const dispatch = useAppDispatch();
  return (
    <li
      className={clsx(styles.item, {
        [styles["item--completed"]]: completed,
      })}
    >
      <p className={styles.text}>{text}</p>
      <div className={styles.wrapper}>
        <input
          className={styles.checkbox}
          checked={completed}
          onChange={() => dispatch(toggleCompleted({ id: id }))}
          type="checkbox"
        />
        <button
          className={styles.button}
          onClick={() => dispatch(deleteTodo({ id: id }))}
        >
          <TrashSimple />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
