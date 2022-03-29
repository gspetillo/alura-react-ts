import style from "./Watch.module.scss";

interface IProps {
  time: number | undefined;
}

export default function Watch({ time = 0 }: IProps) {
  const [minutesDec, minutesUnit] = String(Math.floor(time / 60)).padStart(
    2,
    "0"
  );
  const [secondsDec, secondsUnit] = String(time % 60).padStart(2, "0");
  return (
    <>
      <span className={style.watchNumber}>{minutesDec}</span>
      <span className={style.watchNumber}>{minutesUnit}</span>
      <span className={style.watchDivision}>:</span>
      <span className={style.watchNumber}>{secondsDec}</span>
      <span className={style.watchNumber}>{secondsUnit}</span>
    </>
  );
}
