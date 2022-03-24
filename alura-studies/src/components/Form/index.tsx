import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";
class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTasks((prev) => [
      ...prev,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({ task: "", time: "00:00" });
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor=""></label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
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
}

export default Form;
