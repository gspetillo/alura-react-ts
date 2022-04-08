import React from "react";
import style from "./Button.module.scss";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({ onClick, type, children }: IProps) {
  return (
    <button type={type} onClick={onClick} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
