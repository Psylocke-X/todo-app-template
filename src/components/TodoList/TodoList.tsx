import TodoItem from "@/components/TodoItem/TodoItem.tsx";
import { useAppSelector } from "@/hooks.ts";

import styles from "./TodoList.module.scss";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  return (
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
  );
};

export default TodoList;
