import Button from "../Button";
import Watch from "./Watch";
import style from "./Cronometer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useState } from "react";

interface IProps {
  selected: ITask | undefined;
}

export default function Cronometer({ selected }: IProps) {
  const [time, setTime] = useState<number>();
  if (selected?.time) {
    setTime(timeToSeconds(selected.time))
  }
  return (
    <div className={style.cronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      Time: {time}
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
