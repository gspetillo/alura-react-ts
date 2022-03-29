import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface IProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: IProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""} ${
        completed ? style.doneItem : ""
      }`}
      onClick={() => {
        !completed &&
          selectTask({
            task,
            time,
            selected,
            completed,
            id,
          });
      }}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.done} aria-label="Tarefa Completada"></span>
      )}
    </li>
  );
}
