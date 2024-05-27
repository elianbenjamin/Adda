import style from "./misionVisionAndValues.module.scss";
import visionImg from "../../assets/images/visionImage.jpg";
import misionImg from "../../assets/images/misionImage.jpg";
import valuesImg from "../../assets/images/valuesImage.jpg";

const MisionVisionValues = () => {
  return (
    <div className={style.MisionVisionValues}>
      <section className={style.MisionContainer}>
        <h1>MISION</h1>
        <div className={style.imgContainer}>
          <img src={misionImg} />
        </div>
        <h3>NOSOTROS</h3>
        <p>
          ADDA ES UNA ESCUELA INCLUSIVA, CON DIVERSIDAD. QUE NO TIENE
          ESTANDARES, NI ESTEREOTIPOS: NI TALLAS, NI GENERO, NI EDAD.
        </p>
      </section>
      <section className={style.VisionContainer}>
        <h1>VISION</h1>
        <div className={style.imgContainer}>
          <img src={visionImg} />
        </div>
        <h3>FUTURO</h3>
        <p>
          QUEREMOS QUE NUESTRO AGENCIA SEA RECONOCIDA INTERNACIONALMENTE Y
          MARCAR UN PRECEDENTE EN EL MUNDO DE LA MODA, LAS PASARELAS EUROPEAS,
          DESARROLLANDO UNA PERSONALIDAD IRREPETIBLE.
        </p>
      </section>
      <section className={style.ValuesContainer}>
        <h1>VALORES</h1>
        <div className={style.imgContainer}>
          <img src={valuesImg} />
        </div>

        <h3>VIBRAS</h3>
        <p>
          LIBERTAD, CREATIVIDAD, INCLUSIÓN Y OPTIMISMO. MOTIVAMOS LA LIBERTAD DE
          EXPRESIÓN ROMPIENDO PARADIGMAS. DESPLEGANDO LA CREATIVIDAD SIN
          BARRERAS CON LA MEJOR ENERGÍA.
        </p>
      </section>
    </div>
  );
};

export default MisionVisionValues;
