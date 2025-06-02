import type { FC, InputHTMLAttributes } from "react";

import styles from "./TodoInput.module.scss";

type TodoInputProps = InputHTMLAttributes<HTMLInputElement>;

const TodoInput: FC<TodoInputProps> = (props) => {
  return <input className={styles.input} {...props} />;
};

export default TodoInput;
