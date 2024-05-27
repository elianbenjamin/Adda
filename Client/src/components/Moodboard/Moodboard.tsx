import style from "./moodboard.module.scss";
import img from "../assets/images/_DSC4485.jpg";

const Moodboard = () => {
  return (
    <div className={style.Moodboard}>
      <div className={style.ImagesContainer}>
        <div className={style.mainImgContainer}>
          <img src={img} />
        </div>
      </div>
      <div className={style.infoContainer}>
        <h1>MOODBOARD</h1>
        <p>
          NUESTRO VALOR DIFERENCIAL RADICA EN LA INCLUCION Y LA DIVERSIDAD DE
          ROSTROS, CUERPOS Y GENEROS. INSPIRADOS EN DIVERSOS ESCENARIOS. <br /> ASÍ COMO
          TAMBIÉN LAS TENDENCIAS QUE MARCAN EL RITMO VERTIGINOSO DE LA MODA.
        </p>
      </div>
    </div>
  );
};

export default Moodboard;
