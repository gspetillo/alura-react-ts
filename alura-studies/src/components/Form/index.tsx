import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: IProps) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks((prev) => [
      ...prev,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor=""></label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Form;
