import { useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted({ id }));
  };

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
          onChange={handleToggle}
          type="checkbox"
        />
        <button className={styles.button} onClick={openModal}>
          <TrashSimple />
        </button>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalInner}>
            <p>Вы действительно хотите удалить {text}?</p>
            <div className={styles.modalWrapper}>
              <button className={styles.modalButton} onClick={handleDelete}>
                да
              </button>
              <button className={styles.modalButton} onClick={closeModal}>
                нет
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
