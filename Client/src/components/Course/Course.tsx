import { ClockIcon } from "../../assets/icons";
import style from "./course.module.scss";

const Course = (props: { num: number }) => {
  return (
    <div className={style.Course}>
      <h1>Curso {props.num}</h1>
      <div className={style.content}>
        <p className={style.duration}>
          <ClockIcon />6 semanas
        </p>
        <p className={style.info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          temporibus ex! Dolorem a ipsum quia aut adipisci expedita, minima
          tempora eos quaerat.
        </p>
        <p className={style.price}>10 000 $</p>
        <button>
          Ver curso
        </button>
      </div>
    </div>
  );
};

export default Course;
