import Button from "../Button";
import Watch from "./Watch";
import style from './Cronometer.module.scss'

export default function Cronometer() {
  return (
    <div className={style.cronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
