// import React from 'react'
import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface IProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: IProps ) {
  return (
    <aside className={style.taskList}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            selectTask={selectTask}
            key={index}
            {...item} />
        ))}
      </ul>
    </aside>
  );
}



export default List;
