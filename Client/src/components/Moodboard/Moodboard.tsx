import style from "./moodboard.module.scss";
import img from "../../assets/images/_DSC4502.jpg";
import { useEffect, useRef, useState } from "react";

const Moodboard = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (imgRef.current) {
        const distance = imgRef.current.getBoundingClientRect().top;
        if (distance <= window.innerHeight) setAnimation(true);
      }
    });
  }, []);

  return (
    <div className={style.Moodboard}>
      <div className={style.ImagesContainer}>
        <div
          className={`${style.mainImgContainer} ${
            animation ? style.imgAnimation : ""
          }`}
          ref={imgRef}
        >
          <img src={img} />
        </div>
      </div>
      <div className={style.infoContainer}>
        <h1 className={animation ? style.titleAnimation : ""}>MOODBOARD</h1>
        <p>
          NUESTRO VALOR DIFERENCIAL RADICA EN LA INCLUCION Y LA DIVERSIDAD DE
          ROSTROS, CUERPOS Y GENEROS. INSPIRADOS EN DIVERSOS ESCENARIOS. <br />{" "}
          ASÍ COMO TAMBIÉN LAS TENDENCIAS QUE MARCAN EL RITMO VERTIGINOSO DE LA
          MODA.
        </p>
      </div>
    </div>
  );
};

export default Moodboard;
