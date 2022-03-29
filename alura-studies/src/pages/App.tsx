import React, { useState } from "react";
import Cronometer from "../components/Cronometer";
import Form from "../components/Form";
import List from "../components/List";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((prev) =>
      prev.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function endTask() {
    if (selected) {
      setSelected(undefined);
      const audio = new Audio(
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
      );
      audio.play();
      setTimeout(() => audio.pause(), 1000);
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Cronometer selected={selected} endTask={endTask} />
    </div>
  );
}

export default App;
