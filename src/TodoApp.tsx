import AddTodo from "@/components/AddTodo/AddTodo.tsx";
import TodoList from "@/components/TodoList/TodoList.tsx";

import "@/styles/main.scss";

const TodoApp = () => {
  return (
    <div className="main">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoApp;
