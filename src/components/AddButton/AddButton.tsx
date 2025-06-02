import type { ButtonHTMLAttributes, FC } from "react";

import PlusIcon from "@/assets/icons/Plus.svg?react";
import clsx from "clsx";

import styles from "./AddButton.module.scss";

const AddButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles["button--disabled"]]: disabled,
      })}
      disabled={disabled}
      {...props}
    >
      <PlusIcon />
    </button>
  );
};

export default AddButton;
