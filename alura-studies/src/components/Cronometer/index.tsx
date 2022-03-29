import Button from "../Button";
import Watch from "./Watch";
import style from "./Cronometer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface IProps {
  selected: ITask | undefined;
  endTask: () => void;
}

export default function Cronometer({ selected, endTask }: IProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function countdown(counter: number = 0) {
    const timeoutId = setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        console.log(new Date().getMilliseconds());
        return countdown(counter - 1);
      }
      clearTimeout(timeoutId);
      endTask();
    }, 1000);
  }

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Começar</Button>
    </div>
  );
}
