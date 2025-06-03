import AddTodo from "@/components/AddTodo/AddTodo.tsx";
import TodoList from "@/components/TodoList/TodoList.tsx";

import "@/styles/main.scss";

const TodoApp = () => {
  return (
    <div className="main">
      <AddTodo />
      <TodoList title={"Список дел -"} filter={"active"} />
      <TodoList title={"Завершено -"} filter={"completed"} />
    </div>
  );
};

export default TodoApp;
