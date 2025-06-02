import type { FC } from "react";

import AddButton from "@/components/AddButton/AddButton";
import TodoInput from "@/components/TodoInput/TodoInput.tsx";
import { type SubmitErrorHandler, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import styles from "./AddTodo.module.scss";

interface AddTodoFormData {
  name: string;
}

const AddTodo: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<AddTodoFormData>({
    defaultValues: {},
  });

  const submit: SubmitHandler<AddTodoFormData> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<AddTodoFormData> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit, error)}>
      <TodoInput
        type="text"
        {...register("name", { required: true })}
        placeholder="Новая задача"
      />
      <AddButton disabled={!isValid} />
    </form>
  );
};

export default AddTodo;
