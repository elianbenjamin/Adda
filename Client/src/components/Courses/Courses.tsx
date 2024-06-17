import { WhatsappIconBlack, WhatsappIconGreen } from "../../assets/icons";
import style from "./courses.module.scss";

const Courses = () => {
  return (
    <div className={style.Courses}>
      <h3 className={style.title}>CURSOS</h3>

      <div className={style.content}>
        <h3 className={style.contentTitle}>ONLINE Y PRESENCIAL</h3>

        <div className={style.description}>
          <h3>LOS DIFERENTES CURSOS OFRECIDOS SON:</h3>
          <p>
            -ORATORIA
            <br />
            -PROTOCOLO Y CEREMONIAL
            <br />
            -AUTOMAQUILLAJE
            <br />
            -PROMOTOR DE EVENTOS
            <br />
            -ASESORIA DE IMAGEN
            <br />
            -INGLES
          </p>
        </div>

        <a>
          Consultar
          <WhatsappIconBlack />
        </a>
      </div>
    </div>
  );
};

export default Courses;
