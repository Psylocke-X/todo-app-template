import type { FC } from "react";

import AddButton from "@/components/AddButton/AddButton";
import TodoInput from "@/components/TodoInput/TodoInput.tsx";
import { useAppDispatch } from "@/hooks.ts";
import { addTodo } from "@/store/todosSlice.ts";
import { type SubmitErrorHandler, useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import styles from "./AddTodo.module.scss";

interface AddTodoFormData {
  text: string;
}

const AddTodo: FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<AddTodoFormData>({
    defaultValues: {},
  });

  const submit: SubmitHandler<AddTodoFormData> = (data) => {
    dispatch(addTodo(data.text));
    reset({ text: "" });
  };

  const error: SubmitErrorHandler<AddTodoFormData> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit, error)}>
      <TodoInput
        type="text"
        {...register("text", {
          required: true,
          validate: (value) => value.trim() !== "",
        })}
        placeholder="Новая задача"
      />
      <AddButton disabled={!isValid} />
    </form>
  );
};

export default AddTodo;
