import Course from "../../components/Course/Course";
import style from "./school.module.scss";

const School = () => {
  return (
    <div className={style.School}>
      <h1 className={style.title}>Cursos disponibles:</h1>

      <div className={style.content}>
        <Course num={1} />
        <Course num={2} />
        <Course num={3} />
      </div>
    </div>
  );
};

export default School;
