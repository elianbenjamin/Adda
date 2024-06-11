import { DownloadIcon } from "../../assets/icons";
import style from "./school.module.scss";

const School = () => {
  return (
    <div className={style.School}>
      <h1 className={style.title}>Cursos disponibles:</h1>

      <div className={style.cards}>
        <section className={style.course1}>
          <h1>CARRERA</h1>
          <div className={style.content}>
            <h3>Modelaje Profesional</h3>

            <div>
              <p>-1º año: Formacion integral del modelo.</p>
              <p>-2º año: tecnica y modelaje internacional</p>
              <p>-3º año: perfeccionamieto.</p>
            </div>

            <p>
              Marzo a Noviembre. Todos los sabados de 14 a 17hs
            </p>

            <a>
              Plan de estudio
              <DownloadIcon/>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default School;
