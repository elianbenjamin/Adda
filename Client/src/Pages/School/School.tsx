import Career from "../../components/Career/Career";
import Courses from "../../components/Courses/Courses";
import Promotion from "../../components/Promotion/Promotion";
import style from "./school.module.scss";

const School = () => {
  return (
    <div className={style.School}>
      <h1 className={style.title}>Cursos disponibles:</h1>

      <div className={style.cards}>
        <Career />
        
        <Courses />

        <Promotion />
      </div>
    </div>
  );
};

export default School;
